// 2. Construct all rows for the table body

import {
  menuItems
} from "./menu-data"

const buildRowElem = (allRows, row) => {
  const rowElem  = document.createElement("tr");
  rowElem.appendChild(document.createElement("td"))
  rowElem.children[0].innerHTML = row.id
  rowElem.appendChild(document.createElement("td"))
  rowElem.children[1].innerHTML = row.first
  rowElem.appendChild(document.createElement("td"))
  rowElem.children[2].innerHTML = row.last
  rowElem.appendChild(document.createElement("td"))
  rowElem.children[3].innerHTML = row.age
  rowElem.appendChild(document.createElement("td"))
  rowElem.children[4].innerHTML = row.city

  allRows.appendChild(rowElem)
  return allRows;
}

// export const menuRows = menuItems.reduce(buildRows, "")

const tbody = document.createElement("tbody")
tbody.id = "menuTbody"

export const menuTbody = menuItems.reduce(buildRowElem, tbody)

// export const menuTbody = () => {
//   const elem = document.createElement('tbody');
//   elem.innerHTML =  menuItems.reduce(buildRows, "")
//   return elem;
//   // "<tbody>" + menuItems.reduce(buildRows, "") + "</tbody>"
// }


