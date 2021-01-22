import React from "react";

interface Props {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: Props) => {
  return (
    <div
      className="mb-13"
      style={{
        borderBlockEnd: "1px solid var(--tl-cool-grey-100)",
      }}
    >
      <h2 className="m-0 text-grey-900">{title}</h2>
      <p className="text-grey-600 text-body">{description}</p>
    </div>
  );
};
export default PageHeader;
