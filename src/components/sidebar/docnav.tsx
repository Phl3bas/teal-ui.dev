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
    <div className="px-0 @lg:px-2 mr-10">
      {Object.keys(navigation).map((key, i) => (
        <details
          open={key === "Getting Started" && true}
          className="shadow-none mb-5 overflow-x-hidden "
          key={i}
        >
          <summary className="shadow-none text-black-300 text-h5 @lg:text-body">
            {key}
          </summary>
          <NavList list={navigation[key]} />
        </details>
      ))}
    </div>
  );
};
