import React from "react";

const radiusValues = ["none", "xs", "sm", "md", "lg", "2xl", "3xl", "round"];

const RadiusBox = ({ value }: { value: string }) => {
  return (
    <div
      className="flex bg:teal-500 text:white text-10 flex:justify-center flex:align-center"
      style={{
        display: "flex",
        height: "150px",
        width: "150px",
        borderRadius: `var(--tl-radius-${value})`,
      }}
    >
      --tl-radius-{value}
    </div>
  );
};

export const RadiusContainer = () => (
  <div
    style={{
      width: "50em",
      display: "grid",
      margin: "0 auto",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "50px",
    }}
  >
    {radiusValues.map((val) => (
      <RadiusBox value={val} />
    ))}
  </div>
);
