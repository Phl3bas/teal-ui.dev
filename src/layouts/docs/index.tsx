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
        <main className="@lg:container mx-auto flex-row gap-13 relative @lg:pt-14">
          <Sidebar>
            <DocNav />
          </Sidebar>
          <article className="w-full @lg:w-11/12">
            <div className="p-13 radius-md @lg:shadow-xs mb-19 min-h-screen">
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
