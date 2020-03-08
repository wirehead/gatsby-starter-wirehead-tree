import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PageTemplate({ data, location, pageContext }) {
  const { mdx, allSitePage } = data // data.markdownRemark holds your post data
  const { body } = mdx

  var pages = data.allSitePage.edges.map(article => {
    return (
      <li>
        <Link
          to={article.node.path}
          key={article.node.path}
          className="navbar-item"
        >
          {article.node.context.title}
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <SEO
        title={pageContext.title}
        description={pageContext.excerpt} />
    <h1>{pageContext.title}</h1>
    <MDXRenderer pages={allSitePage}>{body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String, $path: String) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        type
        description
      }
      excerpt(pruneLength: 300)
    }
    allSitePage(filter: { context: { parent: { eq: $path } } }) {
      edges {
        node {
          context {
            id
            depth
            parent
            title
          }
          path
        }
      }
    }
  }
`
