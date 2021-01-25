import { InitialStateType } from "../store";
import { navReducer } from "./NavReducer";

export const mainReducer = (
  { navState }: InitialStateType,
  action: any
): InitialStateType => ({
  navState: navReducer(navState, action),
});
