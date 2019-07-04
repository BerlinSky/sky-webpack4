import { createStore } from "redux";

import { menuItems } from "./menu-data"

function menuList(state = menuItems, action) {
  console.log("action type", action.type);

  if (action.type === "SAVE_CHANGE" ) {
    return state + "???";
  }

  return state;
}

export const menuStore = createStore(menuList);
