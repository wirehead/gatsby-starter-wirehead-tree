import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostLink = ({ post }) => {
  return (
    <li><Link to={post.node.path} key={post.node.path}>
      {post.node.context.title}
    </Link></li>
  )
}

const BlogPage = ({
  data: {
    allSitePage: { edges },
  },
  pageContext,
  location,
}) => {
  const Posts = edges.map(edge => {
    return <PostLink key={edge.node.path} post={edge} />
  })

  return (<Layout>
    <SEO title={pageContext.title} />
    <h1>Blog posts:</h1>
    <p>Note that now we're just indexing the content of this blog</p>
    <ul>
    {Posts}
    </ul>
  </Layout>);
}

export default BlogPage

export const pageQuery = graphql`
  {
    allSitePage(
      sort: { fields: context___date, order: DESC }
      filter: { context: { date: {ne: null}, parent: { eq: "/blog" } } }
      limit: 5
    ) {
      edges {
        node {
          id
          path
          context {
            id
            name
            parent
            title
            type
            depth
            date
            excerpt
          }
        }
      }
    }
  }
`


export const frontmatter = {
  title: "Blog",
}