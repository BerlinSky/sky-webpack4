import { createStore } from "redux";

import { menuItems } from "./menu-data"

function menuStore(state = menuItems, action) {
  if (action.type === "SAVE_CHANGE" ) {
    return state + "???";
  }

  return state;
}

export const store = createStore(menuStore);
