import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const ExampleCard = ({ children }: Props) => {
  return (
    <div
      className="py-14 px-13 bg-white-100 shadow-sm mb-15"
      style={{
        borderRadius: " 0 0 var(--tl-radius-lg) var(--tl-radius-lg)",
      }}
    >
      {children}
    </div>
  );
};
