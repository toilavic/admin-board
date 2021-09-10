import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped,
} from './ActionAllUsers'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
    usersInfo: any
 }

const initColumnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, flex: 1 },
    { headerName: 'Email', field: 'email', sortable: true, editable: false, flex: 1, filter : "agTextColumnFilter", floatingFilter: true },
    {
        headerName: "Action",
        minWidth: 150,
        cellRenderer: actionCellRenderer,
        editable: false,
        colId: "action",
        width: 80
    }
]

var colSpan = function (params: any) {
    return params.data === 2 ? 3 : 1;
};

const defaultColDef = {
    editable: true,
    resizable: true,
    colSpan: colSpan,
    filter: true,
}


const Index: React.FC<Props> = ({ usersInfo }) => {

    const style = {
        height: '80%',
        width: '80%'
    }

    return (
        <div className="ag-theme-alpine"
            style={{
                width: '100%',
                height: '500px',
                marginLeft: '50px'
            }}
        >
            <h4>Result</h4>
            
            <div style = {style} >
                <AgGridReact
                    columnDefs={initColumnDefs}
                    rowData={usersInfo}
                    onRowEditingStopped={onRowEditingStopped}
                    onRowEditingStarted={onRowEditingStarted}
                    onCellClicked={onCellClicked}
                    rowSelection="multiple"
                    editType="fullRow"
                    defaultColDef={defaultColDef}
                    suppressClickEdit={true}
                    enableRangeSelection={true}
                    // domLayout="autoHeight"
                    suppressCopyRowsToClipboard={true}
                />
            </div>

        </div>
    );
}

export default Index;
