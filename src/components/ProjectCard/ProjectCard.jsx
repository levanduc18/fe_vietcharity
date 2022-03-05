import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Image } from 'mui-image'
import { PRIMARY_COLOR } from 'constants/color'
import { makeStyles } from '@mui/styles'
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 560,
    background: '#fff',
    position: 'relative',
    boxShadow: 'none',
  },
  image: {
    width: '100% !important',
    height: '45% !important',
    position: 'absolute !important',
    top: 0,
    left: 0,
  },
  category: {
    backgroundColor: PRIMARY_COLOR,
    position: 'absolute',
    top: '41%',
    left: 40,
    boxShadow: '0 10px 30px 0 rgb(2 169 92 / 50%)',
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    padding: '10px 20px',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    '&:hover': { background: '#000', boxShadow: 'none' },
  },
  avatarContainer: {
    position: 'absolute',
    top: '54%',
    left: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    cursor: 'pointer',
    zIndex: 2,
    color: '#696969',
    marginLeft: 16,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: PRIMARY_COLOR,
    },
  },
  details: {
    position: 'absolute',
    top: '65%',
    left: 40,
    paddingRight: 40,
  },
  projectName: {
    cursor: 'pointer',
    '&:hover': {
      color: PRIMARY_COLOR,
    },
  },
  progressBar: {
    height: 4,
    background: PRIMARY_COLOR,
    marginTop: 16,
  },
}))

function ProjectCard(props) {
  const classes = useStyles()
  const { item } = props
  return (
    <Grid container flexDirection="column" className={classes.root}>
      <Image className={classes.image} src={item?.image} />
      <Grid item className={classes.category}>
        {item?.category}
      </Grid>
      <Box className={classes.avatarContainer}>
        <Avatar src={item?.avatar} style={{ width: 36, height: 36 }} />
        <Typography component="div" className={classes.authorName}>
          <Box fontSize={16} fontWeight={700}>
            {item?.authorName}
          </Box>
        </Typography>
      </Box>
      <Box className={classes.details}>
        <Typography
          component="div"
          className={classes.projectName}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          <Box fontSize={16} fontWeight={700}>
            {item?.projectName}
          </Box>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginTop: 16 }}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography component="div">
              <Box
                fontSize={16}
                fontWeight={500}
                style={{ color: '#696969', marginRight: 8 }}
              >
                Raised of
              </Box>
            </Typography>
            <Typography component="div">
              <Box fontSize={16} fontWeight={700}>
                {`$${item?.currentAmount}`}
              </Box>
            </Typography>
          </Box>
          <Typography component="div">
            <Box fontSize={16} fontWeight={700}>
              {`${(
                (Number(item?.currentAmount) / Number(item?.amountNeeded)) *
                100
              ).toFixed(0)}%`}
            </Box>
          </Typography>
        </Box>
        <Grid
          className={classes.progressBar}
          style={{
            transition: 'width 400ms ease-in-out',
            width: `${(
              (Number(item?.currentAmount) / Number(item?.amountNeeded)) *
              100
            ).toFixed(0)}%`,
          }}
        />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginTop={4}
        >
          <FaRegCalendarAlt fontSize={18} style={{ color: PRIMARY_COLOR }} />
          <Typography component="div">
            <Box fontSize={16} fontWeight={400} marginLeft={1}>
              {moment(item?.createdAt).format('DD MMMM YYYY')}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

ProjectCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ProjectCard
