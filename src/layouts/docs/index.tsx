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
      <main className="container mx-auto flex-row gap-4 relative pt-15">
        <Sidebar>
          <DocNav />
        </Sidebar>
        <div>
          <div
            className="bg-white-000 p-13 br-md shadow-xs mb-19 min-h-screen"
            style={{ minWidth: "58em" }}
          >
            <div className="mx-auto " style={{ width: "50em" }}>
              {frontmatter && (
                <PageHeader
                  title={frontmatter.title}
                  description={frontmatter.description}
                />
              )}
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
