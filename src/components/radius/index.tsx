import React from "react";

const radiusValues = [
  "radius-none",
  "radius-xs",
  "radius-sm",
  "radius-md",
  "radius-lg",
  "radius-2xl",
  "radius-3xl",
  "radius-round",
];

const RadiusBox = ({ value }: { value: string }) => {
  return (
    <div
      className={`flex-col primary-gradient text-white-000 text-body justifycontent-center alignitems-center h-19 w-19 ${value}`}
    >
      --tl-radius-{value}
    </div>
  );
};

export const RadiusContainer = () => (
  <div className="grid mx-auto gridtemp-cols-3 gap-15">
    {radiusValues.map((val) => (
      <RadiusBox value={val} />
    ))}
  </div>
);
