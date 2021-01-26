exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/docs/)) {
    page.context.layout = "docs";
    createPage(page);
  }
};
