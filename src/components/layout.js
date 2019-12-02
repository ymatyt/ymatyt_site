/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

import Header from "./header"

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    marginBottom: theme.spacing(1.5),
  },
  main: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  footer: {
    flexGrow: 1,
    marginTop: theme.spacing(1.5),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles({ children: children })

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
      <Header
        siteTitle={data.site.siteMetadata.title}
        className={classes.header}
      />
      <Box component="main" className={classes.main}>
        {children}
      </Box>
      <Box component="footer" className={classes.footer}>
        <Typography>
          © {new Date().getFullYear()},{` `}
          <Link href="https://github.com/wt">Wren Turkal</Link>.
        </Typography>
        <Typography>
          Contribute your positivity to YMATYT{" "}
          <Link href="https://github.com/ymatyt/ymatyt_site">on Github</Link>.
        </Typography>
        <Typography>
          Badge swag and other wares available at the{" "}
          <Link href="https://www.etsy.com/shop/ymatyt">YMATYT shop</Link>.
        </Typography>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
