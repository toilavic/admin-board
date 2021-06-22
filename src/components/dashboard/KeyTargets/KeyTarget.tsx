import React, { useEffect, useState } from 'react'
import {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped,
    onClickEdit
} from './ActionTarget'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import swal from 'sweetalert';

import APIGetTargets from '../../../api/APIGetTargets'
import APIUpdateTarget from '../../../api/APIUpdateTarget'


interface Props { }

const initColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true, editable: false},
    { headerName: 'Name', field: 'name', sortable: true, filter: true ,  cellRenderer: onClickEdit()},
    { headerName: 'Details', field: 'details', sortable: true, filter: true },
    { headerName: 'URL', field: 'url', sortable: true, filter: true, width: 300 },
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
    resizable: true,
}

const onRowValueChanged = (event: any) => {
    swal({
        title: "Are you sure to update this row?",
        icon: "warning",
        // @ts-ignore
        buttons: true,
        dangerMode: true,
    })
        .then(willDelete => {
            if (willDelete) {
                const { name, details, url, id } = event.data
                APIUpdateTarget(name, details, url, id)
                .then((res) => {
                    if(res.status === 403) swal("Error!", res.data, "warning")
                    else swal("Updated!", res.data, "success")
                })
                .catch((err) => console.error(err))
            }
        });
}

const KeyTarget: React.FC<Props> = ({ }) => {

    const [rowData, setRowData] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        APIGetTargets(token)
            .then((data) => {
                console.log(data)
                setRowData(data)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="ag-theme-alpine tcl-mask"
            style={{
                width: '70%',
                height: '500px'
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
                clipboardDeliminator={","}
                onRowValueChanged={onRowValueChanged}
                suppressCopyRowsToClipboard={true}
            />

        </div>
    );
}

export default KeyTarget;
