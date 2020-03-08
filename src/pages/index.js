import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PostLink = ({ post }) => {
  return (
    <li><Link to={post.node.path} key={post.node.path}>
      {post.node.context.title}
    </Link></li>
  )
}

const IndexPage = ({
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
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Recent updates:</h1>
    <ul>
    {Posts}
    </ul>
  </Layout>);
}

export default IndexPage

export const pageQuery = graphql`
  {
    allSitePage(
      sort: { fields: context___date, order: DESC }
      filter: { context: { date: { ne: null } } }
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
  title: "Indx page",
}