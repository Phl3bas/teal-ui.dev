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
        <main className="@lg:container mx-auto flex-row relative @lg:pt-14 gap-15">
          <Sidebar>
            <DocNav />
          </Sidebar>
          <article className="w-full @lg:w-9/12 ">
            <div className="p-16 radius-md @lg:shadow-xs mb-19 min-h-screen bg-white-000">
              {frontmatter && (
                <PageHeader
                  title={frontmatter.title}
                  description={frontmatter.description}
                />
              )}
              {children}
            </div>
          </article>
        </main>
      </>
    );
  } else {
    return <>{children}</>;
  }
};
