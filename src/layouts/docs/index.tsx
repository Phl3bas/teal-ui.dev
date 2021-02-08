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
  const isDocs = pageContext?.layout === "docs";

  if (isDocs) {
    return (
      <>
        <Navbar />
        <main className="@lg:container mx-auto flex-row gap-8 relative @lg:pt-10">
          <Sidebar>
            <DocNav />
          </Sidebar>
          <div className="w-full @lg:w-11/12">
            <div className="bg-white-000 p-13 radius-md @lg:shadow-xs mb-19 min-h-screen">
              <div className="mx-auto">
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
  } else {
    return <>{children}</>;
  }
};
