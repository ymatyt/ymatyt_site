import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import MenuIcon from "@material-ui/icons/Menu"
import Tooltip from "@material-ui/core/Tooltip"

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
          <Tooltip title="Doesn't work yet." arrow>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h4" className={classes.title}>
            <Link className={classes.titleLink} href="/">
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
