import React from "react";

interface BoxProps {
  shadow: number;
  inset?: boolean;
}

const Box = ({ shadow, inset = false }: BoxProps) => {
  const shadowToken = inset ? "--tl-insetshadow-" : "--tl-shadow-";

  return (
    <div
      className="grid bg:white-100 grid:place-center text:cool-grey-600 h-17"
      style={{
        boxShadow: `var(${shadowToken}${shadow + (inset ? 1 : 0)})`,
      }}
    >
      {shadowToken}
      {shadow + (inset ? 1 : 0)}
    </div>
  );
};

export const Elevation = ({
  inset,
  count,
}: {
  inset: boolean;
  count: number;
}) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--tl-size-15)",
        gridTemplateColumns: "1fr 1fr",
        padding: "var(--tl-size-15)",
        boxShadow: "var(--tl-shadow-1)",
        borderRadius: "var(--tl-radius-md)",
        marginBlockEnd: "var(--tl-size-15)",
      }}
    >
      {[...new Array(count).keys()].map((i) => (
        <Box shadow={i} inset={inset} />
      ))}
    </div>
  );
};
