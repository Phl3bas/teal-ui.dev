import * as React from "react";
import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";
import { DocNav } from "../../components/sidebar/docnav";
import PageHeader from "../../components/pageheader";

interface Props {
  pageContext?: any;
  children?: React.ReactNode;
}

export default ({ pageContext, children }: Props) => {
  const frontmatter = pageContext?.frontmatter;

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
              minHeight: "100vh",
              background: "var(--tl-white-000)",
              padding: "2rem",
              borderRadius: "var(--tl-radius-md)",
              boxShadow: "var(--tl-shadow-1)",
              marginBottom: "10rem",
            }}
          >
            {frontmatter && (
              <PageHeader
                title={frontmatter.title}
                description={frontmatter.description}
              />
            )}
            <div>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};
