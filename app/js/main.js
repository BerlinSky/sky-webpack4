import { menuRows } from "./component/menu-table/menu-tbody";

let index; // variable to set the selected row index

function getSelectedRow() {
  const  table = document.getElementById("table");

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // clear the selected from the previous selected row
      // the first time index is undefined
      if (typeof index !== "undefined") {
        table.rows[index].classList.toggle("selected");
      }

      index = this.rowIndex;
      this.classList.toggle("selected");

    };
  }
}

function moveUp() {
  const rows = document.getElementById("table").rows;
  const parent = rows[index].parentNode;

  if (index > 1) {
    parent.insertBefore(rows[index], rows[index - 1]);
    // when the row go up the index will be equal to index - 1
    index--;
  }
}

function moveDown() {
  const rows = document.getElementById("table").rows;
  const parent = rows[index].parentNode;

  if (index < rows.length - 1) {
    parent.insertBefore(rows[index + 1], rows[index]);
    // when the row go down the index will be equal to index + 1
    index++;
  }
}

const setupButtons = () => {
 document.getElementById("buttonUp").addEventListener("click", moveUp);

 const buttonDown = document.getElementById("buttonDown");
 buttonDown.addEventListener('click', moveDown);
}


getSelectedRow()
setupButtons()

// 3. insert table body with data rows

const insertTBody = (rowElems) => {
  const table = document.getElementById("table");
  table.innerHTML = ""
  table.innerHTML = rowElems
}

insertTBody(menuRows)
