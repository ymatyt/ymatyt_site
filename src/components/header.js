import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-theme-material-ui"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "inherit",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    textDecoration: `none`,
    color: "inherit",
    "&:hover": {
      textDecoration: `inherit`,
    },
  },
}))

const Header = ({ siteTitle, className }) => {
  const classes = useStyles({ siteTitle: siteTitle, className: className })

  return (
    <>
      <AppBar position="static" className={classNames(className, classes.root)}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <Link className={classes.titleLink} to="/">
              {siteTitle}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  className: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
