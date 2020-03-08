import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MenuBar = ({ siteTitle }) => (
  <nav role="navigation" aria-label="main navigation">
    <div style={{display: 'inline-block','margin': '4pt'}}>
      <Link to="/" className="navbar-item">
        {siteTitle}
      </Link>
    </div>
    <div style={{display: 'inline-block', 'margin': '4pt'}}>
      <div>
        <StaticQuery
          query={graphql`
            {
              allSitePage(
                filter: { path: {}, context: { depth: { eq: 1 } } }
                sort: { order: ASC, fields: path }
              ) {
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
          `}
          render={data => {
            return data.allSitePage.edges.map(article => {
              return (
                <Link
                  to={article.node.path}
                  key={article.node.path}
                  style={{display: 'inline-block', 'margin': '4pt'}}
                >
                  {article.node.context.title}
                </Link>
              )
            })
          }}
        />
      </div>
    </div>
  </nav>
)

MenuBar.propTypes = {
  siteTitle: PropTypes.string,
}

MenuBar.defaultProps = {
  siteTitle: ``,
}

export default MenuBar
