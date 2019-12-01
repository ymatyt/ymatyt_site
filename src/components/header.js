import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-theme-material-ui"
import Box from "@material-ui/core/Box"

const style = {
  backgroundColor: `mediumpurple`,
}
const linkStyle = {
  color: `white`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <Box fontSize="2rem" pt="1rem" pl="1.5rem" height="5rem" style={style}>
    <Link style={linkStyle} to="/">
      {siteTitle}
    </Link>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
