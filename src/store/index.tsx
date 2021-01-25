import * as React from "react";
import { Dispatch } from "react";
import { mainReducer } from "../reducers";

export type NavStateType = {
  isOpen: boolean;
};

export type InitialStateType = {
  navState: NavStateType;
};

const initialState = {
  navState: {
    isOpen: false,
  },
};

export const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const Store = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
