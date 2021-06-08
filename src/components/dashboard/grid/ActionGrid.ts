const actionCellRenderer = (params: any) => {
    let eGui = document.createElement("div");

    let editingCells = params.api.getEditingCells();
    // checks if the rowIndex matches in at least one of the editing cells
    let isCurrentRowEditing = editingCells.some((cell: any) => {
        return cell.rowIndex === params.node.rowIndex;
    });

    if (isCurrentRowEditing) {
        eGui.innerHTML = `
  <button  class="action-button update"  data-action="update"> update  </button>
  <button  class="action-button cancel"  data-action="cancel" > cancel </button>
  `;
    } else {
        eGui.innerHTML = `
  <button class="action-button edit"  data-action="edit" > edit  </button>
  <button class="action-button delete" data-action="delete" > delete </button>
  `;
    }

    return eGui;
}

const onCellClicked = (params: any) => {
    // Handle click event for action cells
    if (params.column.colId === "action" && params.event.target.dataset.action) {
        let action = params.event.target.dataset.action;

        if (action === "edit") {
            
            params.api.startEditingCell({
                rowIndex: params.node.rowIndex,
                // gets the first columnKey
                colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
            });
        }

        if (action === "delete") {
            params.api.applyTransaction({
                remove: [params.node.data]
            });
        }

        if (action === "update") {
            console.log('update click')
            params.api.stopEditing(false);
        }

        if (action === "cancel") {
            params.api.stopEditing(true);
        }
    }
}

const onRowEditingStarted = (params: any) => {
    params.api.refreshCells({
        columns: ["action"],
        rowNodes: [params.node],
        force: true
    });
}

const onRowEditingStopped = (params: any) => {
    params.api.refreshCells({
        columns: ["action"],
        rowNodes: [params.node],
        force: true
    });
}

// const getDatePicker = () => {
//     function Datepicker() { }
//     Datepicker.prototype.init = function (params: any) {
//         this.eInput = document.createElement('input');
//         this.eInput.value = params.value;
//         this.eInput.classList.add('ag-input');
//         this.eInput.style.height = '100%';
//         $(this.eInput).datepicker({ dateFormat: 'dd/mm/yy' });
//     };
//     Datepicker.prototype.getGui = function () {
//         return this.eInput;
//     };
//     Datepicker.prototype.afterGuiAttached = function () {
//         this.eInput.focus();
//         this.eInput.select();
//     };
//     Datepicker.prototype.getValue = function () {
//         return this.eInput.value;
//     };
//     Datepicker.prototype.destroy = function () { };
//     Datepicker.prototype.isPopup = function () {
//         return false;
//     };
//     return Datepicker;
// }

export {
    actionCellRenderer,
    onCellClicked,
    onRowEditingStarted,
    onRowEditingStopped,
}

