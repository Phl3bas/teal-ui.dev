import React from "react";

const radiusValues = ["none", "xs", "sm", "md", "lg", "2xl", "3xl", "round"];

const RadiusBox = ({ value }: { value: string }) => {
  return (
    <div
      className={`flex-col primary-gradient text-white-000 text-body justifycontent-center alignitems-center h-19 w-19 br-${value}`}
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
