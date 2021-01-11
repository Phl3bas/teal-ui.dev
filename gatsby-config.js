const path = require("path");

module.exports = {
  siteMetadata: {
    title: "teal-ui.dev",
  },

  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extentions: [".md", ".mdx"],
        defaultLayouts: {
          default: require.resolve("./src/layouts/documentation.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`postcss-nested-ancestors`),
          require(`postcss-nested`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.resolve(__dirname, "src/assets/svg"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "/src/images/icon.png",
    //   },
    // },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "src/pages/docs",
      },
      __key: "images",
    },
  ],
};
