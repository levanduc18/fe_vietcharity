import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import { RiHeartsFill } from 'react-icons/ri'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: TEXT_COLOR,
    padding: theme.spacing(8, 18),
  },
  category: {
    cursor: 'pointer',
    color: '#999ca5',
    lineHeight: 2.8,
    '&:hover': {
      color: PRIMARY_COLOR,
    },
  },
}))

const pageHideFooter = ['/signin', '/signup']

function Footer() {
  const classes = useStyles()

  const location = useLocation()

  const [isHideFooter, setIsHideFooter] = useState(false)

  useEffect(() => {
    setIsHideFooter(pageHideFooter.includes(location.pathname))
  }, [location])

  return (
    !isHideFooter && (
      <Grid
        container
        className={classes.root}
        flexDirection="row"
        justifyContent="center"
      >
        <Grid item style={{ width: '25%', paddingLeft: 24, paddingRight: 30 }}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginBottom={3}
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
                  color: '#fff',
                }}
              >
                VietCharity
              </Box>
            </Typography>
          </Box>
          <Typography component="div">
            <Box
              fontSize={16}
              fontWeight={300}
              style={{
                color: '#fff',
              }}
            >
              VietCharity is a crowdfunding website using the blockchain for the
              fund transparency
            </Box>
          </Typography>
        </Grid>
        <Grid item style={{ width: '20%', paddingLeft: 24, paddingRight: 24 }}>
          <Typography component="div">
            <Box
              fontSize={22}
              fontWeight={700}
              style={{
                color: '#fff',
                marginBottom: 24,
              }}
            >
              Our Projects
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Education
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Medical & Health
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Music
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Clothes
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Building
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Food
            </Box>
          </Typography>
        </Grid>
        <Grid item style={{ width: '20%', paddingLeft: 24, paddingRight: 24 }}>
          <Typography component="div">
            <Box
              fontSize={22}
              fontWeight={700}
              style={{
                color: '#fff',
                marginBottom: 24,
              }}
            >
              Support
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Privacy Policy
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Conditions
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              FAQ & Terms
            </Box>
          </Typography>
          <Typography component="div" className={classes.category}>
            <Box fontSize={16} fontWeight={300}>
              Contact Us
            </Box>
          </Typography>
        </Grid>
        <Grid item style={{ width: '33%', paddingLeft: 24, paddingRight: 24 }}>
          <Typography component="div">
            <Box
              fontSize={22}
              fontWeight={700}
              style={{
                color: '#fff',
              }}
            >
              Contact Us
            </Box>
          </Typography>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 24,
            }}
          >
            <Grid
              style={{
                width: 32,
                height: 32,
                background: PRIMARY_COLOR,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                marginRight: 16,
              }}
            >
              <AiOutlinePhone fontSize={16} style={{ color: '#fff' }} />
            </Grid>
            <Grid>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#999ca5',
                  }}
                >
                  Phone Number
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#fff',
                  }}
                >
                  +84 795 799 457
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 24,
            }}
          >
            <Grid
              style={{
                width: 32,
                height: 32,
                background: PRIMARY_COLOR,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                marginRight: 16,
              }}
            >
              <AiOutlineMail fontSize={16} style={{ color: '#fff' }} />
            </Grid>
            <Grid>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#999ca5',
                  }}
                >
                  Email Address
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#fff',
                  }}
                >
                  lvd181299@gmail.com
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 24,
            }}
          >
            <Grid
              style={{
                width: 32,
                height: 32,
                background: PRIMARY_COLOR,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                marginRight: 16,
              }}
            >
              <MdOutlineLocationOn fontSize={16} style={{ color: '#fff' }} />
            </Grid>
            <Grid>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#999ca5',
                  }}
                >
                  Locations
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={600}
                  style={{
                    color: '#fff',
                  }}
                >
                  4th Floor, 421 Tran Hung Dao, Da Nang
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  )
}

export default Footer
