import {
  SAVE_CHANGE,
  CANCEL_CHANGE,
  REST_MENULIST
} from "./action-type";

export const saveChange = (menuList) => {
  return {
    type: SAVE_CHANGE,
    menuList
  }
}

export function cancelChange(menuList) {
  return {
    type: CANCEL_CHANGE,
    menuList
  }
}

export function resetMenuList(menuList) {
  return {
    type: REST_MENULIST,
    menuList
  }
}
