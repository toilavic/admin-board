import React, { useEffect, useState } from 'react'
import {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped,
    onClickEdit
} from './ActionGrid'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import swal from 'sweetalert';

import APIGetKeys from '../../../api/APIGetKeys'
import APIUpdateKey from '../../../api/APIUpdateKey'


interface Props { }

const initColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true, editable: false},
    { headerName: 'Key', field: 'key', sortable: true, filter: true, editable: false, width: 400 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true,  cellRenderer: onClickEdit() },
    { headerName: 'Owner', field: 'owner', sortable: true, filter: true, editable: false },
    {
        headerName: 'Expires at', field: 'expiresAt', sortable: true, filter: true,  cellRenderer: onClickEdit(),
        valueFormatter: (params: any) => {
            var localDateTime = new Date(params.value).toLocaleDateString();
            return localDateTime;
        }
    },
    {
        headerName: "Action",
        minWidth: 150,
        cellRenderer: actionCellRenderer,
        editable: false,
        colId: "action",
        width: 80
    }
]

const defaultColDef = {
    editable: true,
    width: 220,
}

const onRowValueChanged = (event: any) => {
    console.log(event.data)
    swal({
        title: "Are you sure to update this row?",
        icon: "warning",
        // @ts-ignore
        buttons: true,
        dangerMode: true,
    })
        .then(willDelete => {
            if (willDelete) {
                const { id, name, expiresAt } = event.data
                APIUpdateKey(id, name, expiresAt)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                swal("Updated!", "Your key has been updated!", "success");
            }
        });
}

const KeyGrid: React.FC<Props> = ({ }) => {

    const [rowData, setRowData] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        APIGetKeys(token)
            .then((data) => setRowData(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="ag-theme-alpine tcl-mask container"
            style={{
                width: '70%',
                height: '500px',
                marginTop: '100px'
            }}
        >
            <h1>Available Keys</h1>
            
            <AgGridReact
                onRowEditingStopped={onRowEditingStopped}
                onRowEditingStarted={onRowEditingStarted}
                onCellClicked={onCellClicked}
                columnDefs={initColumnDefs}
                rowData={rowData}
                rowSelection="multiple"
                editType="fullRow"
                defaultColDef={defaultColDef}
                suppressClickEdit={true}
                enableRangeSelection={true}
                onRowValueChanged={onRowValueChanged}
                suppressCopyRowsToClipboard={true}
            />

        </div>
    );
}

export default KeyGrid;
