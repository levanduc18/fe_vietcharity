import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import './Header.css'
import { MdMailOutline } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import {
  RiFacebookCircleFill,
  RiHeartsFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTelephoneFill } from 'react-icons/bs'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: theme.spacing(10),
    background: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 120,
    paddingRight: 120,
    background: 'transparent',
  },
  informationBar: {
    width: '100%',
    background: 'transparent',
  },
  inlineIconAndText: {
    paddingLeft: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconWithText: {
    color: PRIMARY_COLOR,
    marginRight: 8,
  },
  iconContactContainer: {
    paddingLeft: 24,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 12,
  },
  iconContact: {
    color: TEXT_COLOR,
    marginRight: 10,
    cursor: 'pointer',
  },
  toolBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: theme.spacing(1.5, 4),
    borderRadius: 30,
    fontWeight: 700,
    fontSize: 16,
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: '#fff',
    transition: 'linear 0.3s',
    '&:hover': {
      background: '#000',
      boxShadow: 'none',
      borderRadius: 4,
    },
  },
  menuButton: {
    padding: theme.spacing(3.3, 4),
    marginTop: 8,
    color: '#19474e',
    textTransform: 'initial',
    fontSize: 14,
    borderRadius: 0,
    lineHeight: 1.3,
    fontWeight: 500,
    transition: 'all .3s ease-out 0s',
    borderBottom: '3px solid transparent',
    '&:hover': {
      color: PRIMARY_COLOR,
      background: 'transparent',
    },
  },
  selected: {
    transition: 'linear 0.3s',
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      color: PRIMARY_COLOR,
    },
    borderBottom: `3px ${PRIMARY_COLOR} solid`,
  },
  divider: {
    marginLeft: 20,
    marginRight: 20,
  },
}))

const headerData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const pageHideHeader = ['/signin', '/signup']

function Header() {
  const classes = useStyles()

  const [isHideHeader, setIsHideHeader] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setIsHideHeader(pageHideHeader.includes(location.pathname))
  }, [location])

  const getMenuButtons = () =>
    headerData.map(({ label, href }) => (
      <ListItem
        key={label}
        to={href}
        component={RouterLink}
        className={classes.menuButton}
        selected={href === location.pathname}
        classes={{ selected: classes.selected }}
      >
        {label}
      </ListItem>
    ))
  const isSticky = () => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY
    // eslint-disable-next-line no-unused-expressions
    scrollTop >= 240
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky')
  }
  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])
  return (
    !isHideHeader && (
      <Grid container className={classes.container}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          className={classes.informationBar}
        >
          <Grid container>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              className={classes.inlineIconAndText}
            >
              <MdMailOutline fontSize={17} className={classes.iconWithText} />
              <Typography component="div">
                <Box fontSize={13} fontWeight={500}>
                  lvd181299@gmail.com
                </Box>
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              className={classes.inlineIconAndText}
            >
              <BsTelephoneFill fontSize={14} className={classes.iconWithText} />
              <Typography component="div">
                <Box fontSize={13} fontWeight={500}>
                  0795.799.457
                </Box>
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              className={classes.inlineIconAndText}
            >
              <HiLocationMarker
                fontSize={16}
                className={classes.iconWithText}
              />
              <Typography component="div">
                <Box fontSize={13} fontWeight={500}>
                  4th Floor, 421 Tran Hung Dao, Da Nang
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={classes.iconContactContainer}
          >
            <RiFacebookCircleFill
              fontSize={18}
              className={classes.iconContact}
              onClick={() =>
                window.open('https://www.facebook.com/lvduc99/', '_blank')
              }
            />
            <IoLogoLinkedin
              fontSize={18}
              className={classes.iconContact}
              onClick={() =>
                window.open('https://www.linkedin.com/in/lvd1812/', '_blank')
              }
            />
            <RiYoutubeFill
              fontSize={18}
              className={classes.iconContact}
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UChji2-YCoj4nN1BhkP5hPRg',
                  '_blank'
                )
              }
            />
          </Box>
        </Box>
        <Divider className={classes.divider} />
        <Box sx={{ flexGrow: 1 }} className="header-section">
          <AppBar
            className={classes.appBar}
            position="sticky"
            style={{
              top: 0,
            }}
          >
            <Toolbar className={classes.toolBar}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                {...{
                  to: '/',
                  component: RouterLink,
                  style: {
                    textDecoration: 'none',
                    color: TEXT_COLOR,
                  },
                }}
              >
                <RiHeartsFill
                  fontSize={42}
                  style={{ color: PRIMARY_COLOR, marginRight: 8 }}
                />
                <Typography component="div">
                  <Box
                    fontSize={26}
                    fontWeight={900}
                    style={{
                      fontFamily: "'Roboto' sans-serif",
                    }}
                  >
                    VietCharity
                  </Box>
                </Typography>
              </Box>
              <List style={{ display: 'flex', flexDirection: 'row' }}>
                {getMenuButtons()}
              </List>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Button
                  fontSize={15}
                  fontWeight={500}
                  {...{
                    to: '/signin',
                    color: 'primary',
                    component: RouterLink,
                  }}
                  disableTouchRipple
                  className={classes.menuButton}
                >
                  Sign in
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  {...{
                    to: '/projects',
                    color: 'primary',
                    component: RouterLink,
                  }}
                >
                  Donate Now
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Divider className={classes.divider} />
      </Grid>
    )
  )
}

export default Header
