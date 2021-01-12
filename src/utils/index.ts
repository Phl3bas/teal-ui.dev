export const createPageList = (
  query: QueryType,
  basePath: string
): { [key: string]: NavItemObjectType } => {
  return query.allMdx.edges.reduce((acc, cur) => {
    let slug = cur.node.slug;
    let slugArr = cur.node.slug.split("/");
    let title = slugArr[slugArr.length - 1];

    return {
      ...acc,
      [title]: {
        title: capitalize(title),
        path: `/${basePath}/${slug}`,
      },
    };
  }, {});
};

export const capitalize = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join();
