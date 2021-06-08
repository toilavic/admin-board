import React, { useEffect, useState } from 'react'
import {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped
} from './ActionGrid'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import swal from 'sweetalert';

import APIGetKeys from '../../../api/APIGetKeys'

interface Props { }

const initColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true, editable: false },
    { headerName: 'Key', field: 'key', sortable: true, filter: true, editable: false },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Owner', field: 'owner', sortable: true, filter: true },
    {
        headerName: 'Expires at', field: 'expiresAt', sortable: true, filter: true, valueFormatter: (params: any) => {
            var localDateTime = new Date(params.value).toLocaleDateString();
            return localDateTime;
        }
    },
    {
        headerName: "action",
        minWidth: 150,
        cellRenderer: actionCellRenderer,
        editable: false,
        colId: "action"
    }
]

const defaultColDef = {
    editable: true
}

const onRowValueChanged = (event: any) => {
    var expiredAt = new Date(event.data.expiresAt).toLocaleDateString();
    
    swal({
        title: "Are you sure?",
        text: "On my way creating....",
        icon: "warning",
        dangerMode: true,
    })
        // .then(willDelete => {
        //     if (willDelete) {
        //         swal("Deleted!", "Your imaginary file has been deleted!", "success");
        //     }
        // });

}

const initRowData = null;

const KeyGrid: React.FC<Props> = ({ }) => {

    const [rowData, setRowData] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        APIGetKeys(token)
            .then((data) => setRowData(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="ag-theme-alpine tcl-mask"
            style={{
                width: '90%',
                height: 300
            }}
        >
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
            />

        </div>
    );
}

export default KeyGrid;
