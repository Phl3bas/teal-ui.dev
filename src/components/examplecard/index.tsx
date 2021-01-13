import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const ExampleCard = ({ children }: Props) => {
  return (
    <div
      style={{
        padding: "var(--tl-size-14) var(--tl-size-13)",
        borderRadius: " 0 0 var(--tl-radius-lg) var(--tl-radius-lg)",
        boxShadow: "var(--tl-shadow-2)",
        marginBlockEnd: "var(--tl-size-15)",
      }}
    >
      {children}
    </div>
  );
};
