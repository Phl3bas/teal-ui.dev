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
      <main className="flex gap-13 relative container mx:auto pt-15">
        <Sidebar>
          <DocNav />
        </Sidebar>
        <div className="w-full">
          <div className="min-h-100vh bg:white-000 p-13 r-md shadow-1 mb-19">
            <div className="@sm:container  mx:auto">
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
