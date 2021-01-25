import { NavActions } from "src/actions";
import { NavStateType } from "../store";
import { NavActionTypes } from "../actions";

export const navReducer = (state: NavStateType, action: NavActions) => {
  switch (action.type) {
    case NavActionTypes.Open:
      return { ...state, isOpen: true };
    case NavActionTypes.Close:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};
