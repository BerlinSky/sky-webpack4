// 2. Construct all rows for the table body

import { menuItems } from "./menu-data"

const headRow = `
  <tr>
    <td>check</td>
    <td>ID</td>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Age</td>
    <td>City</td>
  </tr>`

const buildRow = (allRows, row) => {
  const rowElem = `
    <tr draggable="true" id=${row.id}>
      <td class="js-check"><span class="icon checked">${row.icon}</span></td>
      <td>${row.id}</td>
      <td>${row.first}</td>
      <td>${row.last}</td>
      <td>${row.age}</td>
      <td>${row.city}</td>
    </tr>
  `
  allRows = allRows + rowElem;
  return allRows;
}

export const menuRows = menuItems.reduce(buildRow, headRow)
