/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <main>{children}</main>
      <footer>
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
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
