import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  return (
    <div
      className="w-25 flex-col"
      style={{
        height: "calc(100% - 8rem)",
      }}
    >
      <div
        className="flex-col fixed py-0 px-8 min-w-21 bg-white-000"
        style={{
          height: "calc(100% - 8rem)",
        }}
      >
        <SimpleBar style={{ maxHeight: "calc(100%)" }} autoHide={true}>
          {children}
        </SimpleBar>
      </div>
    </div>
  );
};
