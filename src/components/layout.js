/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box';

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box component="main" mt="1rem" ml="1.45rem">{children}</Box>
      <Box component="footer">
        <div>
          © {new Date().getFullYear()},{` `}
          <a href="https://github.com/wt">Wren Turkal</a>.
        </div>
        <div>
          Contribute your positivity to YMATYT{" "}
          <a href="https://github.com/ymatyt/ymatyt_site">here</a>.
        </div>
        <div>
          Badge swag and other wares available at the <a href="https://www.etsy.com/shop/ymatyt">YMATYT shop</a>.
        </div>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
