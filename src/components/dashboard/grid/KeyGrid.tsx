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


import APIGetKeys from '../../../api/APIGetKeys'

interface Props { }

const initColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Key', field: 'key', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Owner', field: 'owner', sortable: true, filter: true },
    { headerName: 'Expires at', field: 'expiresAt', sortable: true, filter: true },
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
        <div className="ag-theme-alpine"
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
            />

        </div>
    );
}

export default KeyGrid;
