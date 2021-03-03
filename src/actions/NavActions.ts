import { ActionMap } from "./ActionMap";

export enum NavActionTypes {
  Open = "OPEN_NAV",
  Close = "CLOSE_NAV",
}

type NavType = {
  [NavActionTypes.Open]: true;
  [NavActionTypes.Close]: false;
};

export type NavActions = ActionMap<NavType>[keyof ActionMap<NavType>];

export const CloseNav = () => {
  return { type: NavActionTypes.Close };
};

export const OpenNav = () => {
  return { type: NavActionTypes.Open };
};

export const ToggleNav = (state: boolean) => {
  return state ? { type: NavActionTypes.Close } : { type: NavActionTypes.Open };
};
