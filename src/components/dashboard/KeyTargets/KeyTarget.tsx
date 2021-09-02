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
    { headerName: 'Name', field: 'name', sortable: true, filter: true},
    { headerName: 'Key', field: 'key', editable: false,  sortable: true, filter: true, flex: 1 ,  valueGetter: (params: any) => params.data.key.key },
    { headerName: 'Details', field: 'details', sortable: true, filter: true, flex: 1 },
    { headerName: 'URL', field: 'url', sortable: true, filter: true, flex: 1 },
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
    // width: 220,
    resizable: true,
    colSpan: colSpan,
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
                        if (res.status === 403) swal("Error!", res.data, "warning")
                        else swal("Updated!", res.data, "success")
                    })
                    .catch((err) => console.error(err))
            }
        });
}

const KeyTarget: React.FC<Props> = ({ }) => {

    const [rowData, setRowData] = useState()



    let TOKEN = localStorage.getItem('token')

    const getTokenEveryTwoMinus = () => {
        var newToken = localStorage.getItem('token')
        return newToken;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTokenEveryTwoMinus()
            console.log('new token applied 2 mins ago !')
        }, 120000);
        return () => clearInterval(interval);
    })

    useEffect(() => {
        APIGetTargets(TOKEN)
            .then((data) => {
                console.log(data)
                setRowData(data)
            })
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
            <h1>Active Targets</h1>

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
                stopEditingWhenCellsLoseFocus={true}
                domLayout="autoHeight"
            />

        </div>
    );
}

export default KeyTarget;
