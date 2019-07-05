import { createStore } from "redux";

function menuList(state = { }, action) {
  console.log("action type", action.type);

  if (action.type === "SAVE_CHANGE") {
    return state.concat([{ test: true }])
  }

  return state;
}

export const menuStore = createStore(menuList);
