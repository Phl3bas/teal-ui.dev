type QueryType = {
  allMdx: {
    edges: QueryNode[];
  };
};

type QueryNode = {
  node: { slug: string };
};

type NavItemObjectType = {
  title: string;
  path: string;
};
