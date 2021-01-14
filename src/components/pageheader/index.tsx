import React from "react";

interface Props {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: Props) => {
  return (
    <div
      style={{
        borderBlockEnd: "1px solid var(--tl-cool-grey-100)",
        marginBlockEnd: "var(--tl-size-13)",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "var(--tl-grey-900)",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "var(--tl-grey-600)",
          fontSize: "var(--tl-size-10)",
        }}
      >
        {description}
      </p>
    </div>
  );
};
export default PageHeader;
