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
    { title: "Overview", path: "/docs" },
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

  const css: NavItemObjectType[] = [
    { title: "Overview", path: pages["overview-css"].path },
    pages["display"],
    pages["position"],
    pages["margin"],
    pages["padding"],
    pages["width"],
    pages["height"],
    pages["text"],
    pages["background"],
    pages["box-shadow"],
    pages["flexbox"],
    pages["grid"],
    pages["gap"],
    pages["content-positioning"],
    pages["list-styling"],
  ];

  const components: NavItemObjectType[] = [{ title: "Coming Soon", path: "" }];

  const navigation = {
    "Getting Started": gettingStarted,
    Tokens: tokens,
    Elements: elements,
    CSS: css,
    Components: components,
  };

  return (
    <div
      className="px-12 @lg:px-0"
      style={{ paddingBottom: "var(--tl-size-20)" }}
    >
      {Object.keys(navigation).map((key, i) => (
        <div key={i}>
          <h5 className="text-black-300 mb-2">{key}</h5>
          <NavList list={navigation[key]} />
        </div>
      ))}
    </div>
  );
};
