exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
  `)
  data.allMdx.edges.forEach((edge) => {
    const path = "/" + edge.node.frontmatter.id
    actions.createPage({
      path,
      component: require.resolve(
        `./src/page_templates/product_template/index.tsx`
      ),
      context: { id: edge.node.frontmatter.id },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false
      }
    }
  })
}