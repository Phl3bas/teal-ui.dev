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
