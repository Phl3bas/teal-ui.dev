import React from "react";

interface BoxProps {
  shadow: number;
  inset?: boolean;
}

const Box = ({ shadow, inset = false }: BoxProps) => {
  const shadowToken = inset ? "--tl-insetshadow-" : "--tl-shadow-";

  return (
    <div
      style={{
        display: "grid",
        height: "100px",

        background: "var(--tl-white-100)",
        boxShadow: `var(${shadowToken}${shadow + (inset ? 1 : 0)})`,
        placeContent: "center",
        color: "var(--tl-cool-grey-600)",
        fontSize: "var(--tl-size-11)",
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
