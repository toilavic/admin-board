import React, { useEffect, useState } from 'react'
import {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped,
    getDatePicker
} from './ActionGrid'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import swal from 'sweetalert';

import APIGetKeys from '../../../api/APIGetKeys'
import APIUpdateKey from '../../../api/APIUpdateKey'
import { CellClickedEvent } from 'ag-grid-community';

import OpenEmail from './OpenEmail';

interface Props { }

const initColumnDefs = [
    { headerName: 'Key', field: 'key', sortable: true, filter: true, editable: false, flex: 2 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, flex: 1 },
    { headerName: 'Owner', field: 'owner', sortable: true, filter: true, editable: false, flex: 1 },
    {
        headerName: 'Expires at', field: 'expiresAt', sortable: true, filter: true, flex: 1.5, maxWidth: 400, cellEditor: "datePicker", 
        valueFormatter: (params: any) => {

            var today = new Date().toISOString().substring(0, 10)
            var localDateTime = new Date(params.value).toISOString().substring(0, 10);
            
            var diff =  Math.floor(( Date.parse(localDateTime) - Date.parse(today) ) / 86400000); 
            
            return localDateTime + ' (' + diff + ' days left)'
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

var colSpan = function (params: any) {
    return params.data === 2 ? 3 : 1;
};


const defaultColDef = {
    editable: true,
    width: 220,
    colSpan: colSpan,
    filter: true
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

    const [show, onSetShow] = useState(false)
    const [selectedKey, setSelectedKey] = useState('')

    let TOKEN = localStorage.getItem('token')

    const onCellDoubleClicked = (params: CellClickedEvent) => {
        setSelectedKey(params.value)
        onSetShow(true)
    }

    useEffect(() => {
        APIGetKeys(TOKEN)
            .then((data) => setRowData(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="ag-theme-alpine container"
            style={{
                width: '80%',
                height: '500px',
                marginTop: '100px'
            }}
        >
            <h1>Available Keys</h1>
            {show && <OpenEmail show={show} onSetShow={onSetShow} selectedKey = {selectedKey}/>}
            <AgGridReact
                onRowEditingStopped={onRowEditingStopped}
                onRowEditingStarted={onRowEditingStarted}
                onCellClicked={onCellClicked}
                onCellDoubleClicked = {onCellDoubleClicked}
                columnDefs={initColumnDefs}
                rowData={rowData}
                rowSelection="multiple"
                editType="fullRow"
                defaultColDef={defaultColDef}
                suppressClickEdit={true}
                enableRangeSelection={true}
                onRowValueChanged={onRowValueChanged}
                suppressCopyRowsToClipboard={true}
                domLayout="autoHeight"
                // stopEditingWhenCellsLoseFocus={true}
                components = {{ datePicker: getDatePicker() }}
            />

        </div>
    );
}

export default KeyGrid;
