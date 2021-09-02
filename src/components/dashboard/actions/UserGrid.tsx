import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
    usersInfo: any
 }

const initColumnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true, flex: 1 },
    { headerName: 'Email', field: 'email', sortable: true, filter: true, editable: false, flex: 1 }
]

var colSpan = function (params: any) {
    return params.data === 2 ? 3 : 1;
};

const defaultColDef = {
    editable: true,
    width: 220,
    colSpan: colSpan,
    filter: true
}

const UserGrid: React.FC<Props> = ({ usersInfo }) => {

    return (
        <div className="ag-theme-alpine"
            style={{ width: '90%', marginLeft: '1rem'}}
        >
            <h4>Result</h4>
  
            <AgGridReact
                columnDefs={initColumnDefs}
                rowData={usersInfo}
                rowSelection="multiple"
                editType="fullRow"
                defaultColDef={defaultColDef}
                suppressClickEdit={true}
                enableRangeSelection={true}
                domLayout="autoHeight"
                suppressCopyRowsToClipboard={true}
            />

        </div>
    );
}

export default UserGrid;
