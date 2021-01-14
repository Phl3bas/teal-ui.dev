import React from "react";

const radiusValues = ["none", "xs", "sm", "md", "lg", "2xl", "3xl", "round"];

const RadiusBox = ({ value }: { value: string }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "200px",
        background: "var(--tl-teal-500)",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "var(--tl-size-11)",
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
