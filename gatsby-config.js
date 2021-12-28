module.exports = {
  siteMetadata: {
    siteUrl: "https://tastyspore.com",
    title: "tastyspore",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-643TTLK24R",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "products",
        path: `./src/products`,
      },
      __key: "products",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `./src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./types/gatsby-graphql.ts`,
      },
    },
  ],
}
