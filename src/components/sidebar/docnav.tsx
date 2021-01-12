import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { NavList } from "./NavList";
import { createPageList } from "../../utils";

export const DocNav = (): JSX.Element => {
  const query: QueryType = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const pages = createPageList(query, "docs");

  const gettingStarted: NavItemObjectType[] = [
    { title: "Overview", path: "/docs/" },
  ];

  const tokens: NavItemObjectType[] = [
    { title: "Overview", path: pages["overview-tokens"].path },
    pages["palette"],
    pages["scale"],
    pages["elevation"],
    pages["radius"],
    pages["eases"],
  ];

  const elements: NavItemObjectType[] = [
    { title: "Overview", path: pages["overview-elements"].path },
    pages["reset"],
    pages["typography"],
    pages["headings"],
    pages["lists"],
    pages["buttons"],
    pages["blockquotes"],
    pages["code"],
    pages["summary"],
    pages["tables"],
    pages["forms"],
    pages["address"],
  ];

  const css: NavItemObjectType[] = [];

  const components: NavItemObjectType[] = [];

  const navigation = {
    "Getting Started": gettingStarted,
    Tokens: tokens,
    Elements: elements,
    CSS: css,
    Components: components,
  };

  return (
    <div>
      {Object.keys(navigation).map((key) => (
        <>
          <div key={key}>
            <h5
              style={{
                color: "var(--tl-black-000)",
                marginBlockEnd: "var(--tl-size-2)",
              }}
            >
              {key}
            </h5>
            <NavList list={navigation[key]} />
          </div>
        </>
      ))}
    </div>
  );
};
