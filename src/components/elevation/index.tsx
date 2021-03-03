import React from "react";
import { ExampleCard } from "../examplecard";

interface BoxProps {
  shadow: number;
  inset?: boolean;
}

const Box = ({ shadow, inset = false }: BoxProps) => {
  const shadowToken = inset ? "--tl-insetshadow-" : "--tl-shadow-";

  return (
    <div
      className="grid bg-white-000 placecontent-center text-cool-grey-600 h-20"
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
    <ExampleCard>
      <div
        className="grid gap-15 gridtemp-cols-2 p-15"
        style={{
          marginBlockEnd: "var(--tl-size-15)",
        }}
      >
        {[...new Array(count).keys()].map((i, id) => (
          <Box key={id} shadow={i} inset={inset} />
        ))}
      </div>
    </ExampleCard>
  );
};
