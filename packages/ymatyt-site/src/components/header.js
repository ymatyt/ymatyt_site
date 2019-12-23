import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Tooltip from "@material-ui/core/Tooltip"
import { loginUser, logoutUser, useAuthStatus } from "gatsby-plugin-google-gapi"

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
  const { authed, userFirstName } = useAuthStatus()

  // login/profile menu state
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const loginUI = () => {
    const handleMenu = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    if (authed) {
      return (
        <>
          <Typography>Hello, {userFirstName}!</Typography>
          <IconButton
            className={classes.menuButton}
            aria-label="user-menu"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem
              selected
              onClick={x => {
                handleClose(x)
                logoutUser(x)
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      )
    } else {
      if (authed === null) {
        return (
          <Tooltip title="Login (not ready yet: please wait...)" arrow>
            <IconButton className={classes.menuButton} aria-label="login">
              <AccountCircle color="action" />
            </IconButton>
          </Tooltip>
        )
      } else {
        return (
          <Tooltip title="Login" arrow>
            <IconButton
              className={classes.menuButton}
              aria-label="login"
              onClick={loginUser}
            >
              <AccountCircle color="action" />
            </IconButton>
          </Tooltip>
        )
      }
    }
  }

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
          {loginUI()}
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
