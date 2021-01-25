import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { AppContext } from "../../store";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  const { state, dispatch } = React.useContext(AppContext);

  return (
    <div
      className={`${
        state.navState.isOpen ? "none" : ""
      } ontop px-12 min-w-22 @lg-min-w-0 @lg:w-3/12 @lg:flex-col bg-white-000 @lg:bg-transparent`}
      style={{
        height: "calc(100% - 8rem)",
      }}
    >
      <div
        className="flex-col fixed py-0 px-8 min-w-22"
        style={{
          height: "calc(100%)",
          borderRight: "1px solid var(--tl-teal-500)",
        }}
      >
        <SimpleBar style={{ maxHeight: "calc(100%)" }} autoHide={true}>
          {children}
        </SimpleBar>
      </div>
    </div>
  );
};
