import { menuRows } from "./component/menu-table/menu-tbody";
import { menuItems } from "./component/menu-table/menu-data";

// 3. insert table body with data rows
const addDataRows = (rowElems) => {
  const table = document.getElementById("table");
  table.innerHTML = ""
  table.innerHTML = rowElems
}

addDataRows(menuRows)

// 4. Add EventLisnters:

function startToDragRow(event) {
  const index = event.srcElement.rowIndex
  event.dataTransfer.setData("text", index);
}

function dropToTheRow(event) {
  event.preventDefault();

  const rows = document.getElementById("table").rows
  const sourceRowIndex = parseInt(event.dataTransfer.getData("text"), 10);
  const thisRow = event.srcElement.parentNode;
  const currentRowIndex = thisRow.rowIndex;
  const parentForAllRows = thisRow.parentNode

  parentForAllRows.insertBefore(rows[sourceRowIndex], rows[currentRowIndex]);
}

function dragOverTheRow(event) {
  event.preventDefault();
}

const addDataRowEventListner = () => {
  const table = document.getElementById("table");
  const rows = table.rows;

  // Need to refactor it for the FP style
  for (var i = 1; i < rows.length; i++) {
    rows[i].addEventListener('dragstart', startToDragRow);
    rows[i].addEventListener('drop', dropToTheRow);
    rows[i].addEventListener('dragover', dragOverTheRow);
  }
}

const getRowData = () => {
  const table = document.getElementById("table");
  const rows = table.querySelectorAll("tr[id]");

  const rowData = [...rows].map((row) => ({
    "id": row.id,
    "order": row.rowIndex
  }));

  return rowData;;
}

const refreshMenuData = () => {
  const orginalMenuItems = menuItems;
  const currentMenuItems =  getRowData();
  const menuItemsUpdated = Object.assign([], orginalMenuItems, currentMenuItems);

  console.log("menuItemsUpdated", menuItemsUpdated);
}

const saveChange = () => {
  refreshMenuData();
}

const addButtonEventListner = () => {
  const elem = document.getElementById("save");
  elem.addEventListener("click", saveChange);
}

addDataRowEventListner()
addButtonEventListner()

