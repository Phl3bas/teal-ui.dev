import { graphql, Link, useStaticQuery } from "gatsby";
import { list } from "postcss";
import * as React from "react";
import { NavList } from "./NavList";

type NavItemObjectType = {
  [key: string]: { title: string; path: string };
};

type QueryNode = {
  node: { slug: string };
};

type QueryType = {
  allMdx: {
    edges: QueryNode[];
  };
};

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

  const createPageList = (query: QueryType, basePath: string) => {
    return query.allMdx.edges.reduce((acc, cur) => {
      let slug = cur.node.slug;
      let slugArr = cur.node.slug.split("/");
      let title = slugArr[slugArr.length - 1];

      return {
        ...acc,
        [title]: {
          title: capitalize(title),
          slug: `/${basePath}/${slug}`,
        },
      };
    }, {});
  };

  const capitalize = (text: string) =>
    text
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join();

  const pages = createPageList(query, "docs");

  const gettingStarted: NavItemObjectType[] = [];

  const tokens: NavItemObjectType[] = [pages["palette"]];

  const elements: NavItemObjectType[] = [pages["buttons"]];

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
        <div key={key}>
          <h5>{key}</h5>
          <NavList list={navigation[key]} />
        </div>
      ))}
    </div>
  );
};
