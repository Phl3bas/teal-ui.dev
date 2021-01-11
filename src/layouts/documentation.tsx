import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { DocNav } from "../components/sidebar/docnav";

interface Props {
  children?: React.ReactNode;
}

const DocumentationLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          gap: "2rem",
          position: "relative",
          maxWidth: "80em",
          margin: "0 auto",
          paddingTop: "3rem",
        }}
      >
        <Sidebar>
          <DocNav />
        </Sidebar>
        <div style={{ width: "100%" }}>
          <div
            style={{
              minHeight: "100%",
              background: "var(--tl-white-100)",
              padding: "2rem",
              borderRadius: "var(--tl-radius-md)",
              boxShadow: "var(--tl-shadow-1)",
              marginBottom: "10rem",
            }}
          >
            <div>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DocumentationLayout;
