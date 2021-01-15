import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  return (
    <div
      className="w-25%"
      style={{
        height: "calc(100% - 8rem)",
      }}
    >
      <div
        className="flex flex:col fixed py-0 px-7 min-w-21 bg:white-000 overflow-y:scroll"
        style={{
          height: "calc(100% - 8rem)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
