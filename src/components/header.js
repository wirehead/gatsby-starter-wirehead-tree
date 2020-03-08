import PropTypes from "prop-types"
import React from "react"
import MenuBar from "./menubar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ccc`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <MenuBar siteTitle={siteTitle} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
