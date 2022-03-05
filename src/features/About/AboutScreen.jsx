import { Box, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import React from 'react'
import { FaMoneyBillAlt, FaRegDotCircle } from 'react-icons/fa'
import Charity4JPG from 'assets/charity4.jpg'
import { MdDone } from 'react-icons/md'
import { Image } from 'mui-image'
import Charity5JPG from 'assets/charity5.jpg'
import Charity6JPG from 'assets/charity6.jpg'
import aboutPattern from 'assets/about-pattern.png'
import { AiOutlineArrowRight, AiOutlineProject } from 'react-icons/ai'
import { HiOutlineCreditCard, HiUserGroup } from 'react-icons/hi'
import { BsEye } from 'react-icons/bs'
import { RiHandCoinLine } from 'react-icons/ri'
import CountUp from 'react-countup'
import { BiDonateHeart } from 'react-icons/bi'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundPosition: '100%',
    backgroundImage: `url(${Charity4JPG})`,
    backgroundSize: 'cover',
  },
  fadeContainer: {
    backgroundColor: TEXT_COLOR,
    opacity: 0.9,
    width: '100%',
    height: '100%',
    padding: theme.spacing(16, 18),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    padding: theme.spacing(12, 18, 12, 18),
    display: 'flex',
    height: '110vh',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: theme.spacing(2, 4),
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
      borderRadius: 6,
    },
  },
  card: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24vw',
    padding: theme.spacing(8, 4),
    position: 'relative',
    transition: '.4s ease-in-out',
    margin: 14,
    '&:hover': {
      background: TEXT_COLOR,
      '& $icon, $title, $description': {
        color: '#fff',
        opacity: 0.9,
      },
      '& $buttonFake': {
        color: '#fff',
        background: PRIMARY_COLOR,
        border: 'none',
      },
    },
  },
  buttonFake: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: '50%',
    border: '1px #e5e8e9 solid',
    background: '#fff',
    cursor: 'pointer',
    transition: '0.4s ease-in-out',
    '&:hover': {
      background: PRIMARY_COLOR,
      color: '#fff',
      border: '2px #696969 solid',
    },
  },
  inlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatWeDo: {
    display: 'flex',
    padding: theme.spacing(12, 18),
    flexDirection: 'column',
    background: '#edf9f3',
    alignItems: 'center',
  },
  icon: {
    zIndex: 3,
    color: PRIMARY_COLOR,
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    lineHeight: 1.3,
    textAlign: 'center',
    zIndex: 3,
  },
  description: {
    marginBottom: 32,
    lineHeight: 1.3,
    textAlign: 'center',
    color: '#696969',
  },
  achievement: {
    display: 'flex',
    padding: theme.spacing(12, 18, 0, 18),
    flexDirection: 'column',
    alignItems: 'center',
  },
  numberContainer: {
    background: PRIMARY_COLOR,
    width: '100%',
    padding: '40px 64px',
    marginTop: 32,
  },
}))

function AboutScreen() {
  const classes = useStyles()
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container className={classes.topContainer}>
        <Grid container className={classes.fadeContainer}>
          <Grid item>
            <Typography component="div">
              <Box
                fontSize={42}
                fontWeight={700}
                style={{
                  lineHeight: 1.4,
                  marginBottom: 20,
                  display: 'block',
                  color: '#fff',
                }}
              >
                About Us
              </Box>
            </Typography>
          </Grid>
          <Grid item className={classes.inlineContainer}>
            <Typography component="div">
              <Box fontSize={20} fontWeight={700} style={{ color: '#fff' }}>
                Home
              </Box>
            </Typography>
            <FaRegDotCircle
              fontSize={18}
              style={{ marginLeft: 12, marginRight: 12, color: '#fff' }}
            />
            <Typography component="div">
              <Box fontSize={20} fontWeight={700} style={{ color: '#fff' }}>
                About Us
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.contentContainer}>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          style={{ marginTop: 80, width: '35vw' }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Grid style={{ position: 'relative' }}>
              <Typography component="div">
                <Box
                  fontSize={20}
                  fontWeight={600}
                  style={{
                    marginBottom: 12,
                    color: PRIMARY_COLOR,
                  }}
                >
                  + About me
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={60}
                  fontWeight={800}
                  style={{
                    marginBottom: 12,
                    color: TEXT_COLOR,
                    opacity: 0.1,
                    position: 'absolute',
                    fontFamily: '"Shadows Into Light",cursive',
                    top: -36,
                    left: 0,
                  }}
                >
                  About me
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={42}
                  fontWeight={700}
                  style={{
                    marginBottom: 40,
                    lineHeight: 1.3,
                    letterSpacing: -0.5,
                  }}
                >
                  I want to bring many things to everyone
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={16}
                  fontWeight={400}
                  style={{ marginBottom: 32, color: '#696969' }}
                >
                  In order to help the poor in difficult circumstances, so I
                  designed the website Charity applies new technologies with
                  outstanding features:
                </Box>
              </Typography>
            </Grid>
            <Grid container style={{ display: 'flex', flexDirection: 'row' }}>
              <Grid
                style={{
                  width: 32,
                  height: 32,
                  background: PRIMARY_COLOR,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdDone fontSize={20} style={{ color: '#fff' }} />
              </Grid>
              <Grid item style={{ marginLeft: 16 }}>
                <Typography component="div">
                  <Box
                    fontSize={20}
                    fontWeight={700}
                    style={{ marginBottom: 12 }}
                  >
                    Raise Funds With Crowdfunding
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize={16}
                    fontWeight={400}
                    style={{ color: '#696969' }}
                  >
                    Anyone can donate to a project according to their trust
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ display: 'flex', flexDirection: 'row', marginTop: 32 }}
            >
              <Grid
                style={{
                  width: 32,
                  height: 32,
                  background: PRIMARY_COLOR,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdDone fontSize={20} style={{ color: '#fff' }} />
              </Grid>
              <Grid item style={{ marginLeft: 16 }}>
                <Typography component="div">
                  <Box
                    fontSize={20}
                    fontWeight={700}
                    style={{ marginBottom: 12 }}
                  >
                    Transparent Fund
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize={16}
                    fontWeight={400}
                    style={{ color: '#696969' }}
                  >
                    Website using blockchain to record all donations
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ display: 'flex', flexDirection: 'row', marginTop: 32 }}
            >
              <Grid
                style={{
                  width: 32,
                  height: 32,
                  background: PRIMARY_COLOR,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdDone fontSize={20} style={{ color: '#fff' }} />
              </Grid>
              <Grid item style={{ marginLeft: 16 }}>
                <Typography component="div">
                  <Box
                    fontSize={20}
                    fontWeight={700}
                    style={{ marginBottom: 12 }}
                  >
                    Millions in Funding
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize={16}
                    fontWeight={400}
                    style={{ color: '#696969' }}
                  >
                    Bring money to help those in need
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          style={{
            width: '35vw',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={Charity5JPG}
            style={{
              width: '30vw',
              height: '70vh',
              position: 'absolute',
              top: 0,
              borderRadius: 10,
              right: 64,
            }}
          />
          <Image
            src={Charity6JPG}
            style={{
              width: '20vw',
              height: '44vh',
              position: 'absolute',
              borderRadius: 10,
              bottom: 0,
              left: -128,
            }}
          />
          <Image
            src={aboutPattern}
            style={{
              width: '10vw',
              height: 'auto',
              position: 'absolute',
              bottom: 80,
              right: 0,
              zIndex: -1,
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.whatWeDo}>
        <Grid style={{ position: 'relative' }}>
          <Typography component="div">
            <Box
              fontSize={20}
              fontWeight={600}
              style={{
                marginBottom: 12,
                color: PRIMARY_COLOR,
                textAlign: 'center',
              }}
            >
              + What I Do
            </Box>
          </Typography>
          <Typography component="div">
            <Box
              fontSize={60}
              fontWeight={800}
              style={{
                marginBottom: 12,
                color: TEXT_COLOR,
                opacity: 0.1,
                position: 'absolute',
                fontFamily: '"Shadows Into Light",cursive',
                top: -36,
                left: '42%',
              }}
            >
              Features
            </Box>
          </Typography>
          <Typography component="div">
            <Box
              fontSize={42}
              fontWeight={700}
              style={{
                marginBottom: 40,
                lineHeight: 1.3,
                letterSpacing: -0.5,
                textAlign: 'center',
              }}
            >
              My Features
            </Box>
          </Typography>
          <Grid
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Grid className={classes.card}>
              <Typography component="div">
                <Box
                  fontSize={180}
                  fontWeight={700}
                  style={{
                    lineHeight: 1.3,
                    textAlign: 'center',
                    position: 'absolute',
                    top: 8,
                    left: 80,
                    zIndex: 2,
                    opacity: 0.1,
                    color: '#fff',
                    textShadow: '1px 1px 2px #000',
                  }}
                >
                  01
                </Box>
              </Typography>
              <HiOutlineCreditCard fontSize={72} className={classes.icon} />
              <Typography component="div">
                <Box fontSize={18} fontWeight={700} className={classes.title}>
                  Global Payment Processing
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={15}
                  fontWeight={400}
                  className={classes.description}
                >
                  Because of the use of cryptocurrency and community donations,
                  anyone can donate to a project.
                </Box>
              </Typography>
              <Grid className={classes.buttonFake}>
                <AiOutlineArrowRight fontSize={18} />
              </Grid>
            </Grid>
            <Grid className={classes.card}>
              <Typography component="div">
                <Box
                  fontSize={180}
                  fontWeight={700}
                  style={{
                    lineHeight: 1.3,
                    textAlign: 'center',
                    position: 'absolute',
                    top: 8,
                    left: 64,
                    zIndex: 2,
                    opacity: 0.1,
                    color: '#fff',
                    textShadow: '1px 1px 2px #000',
                  }}
                >
                  02
                </Box>
              </Typography>
              <BsEye fontSize={72} className={classes.icon} />
              <Typography component="div">
                <Box fontSize={18} fontWeight={700} className={classes.title}>
                  Charity Fund Transparency
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={15}
                  fontWeight={400}
                  className={classes.description}
                >
                  I use blockchain to store all donations, so everyone can see
                  exactly how much money the project has raised.
                </Box>
              </Typography>
              <Grid className={classes.buttonFake}>
                <AiOutlineArrowRight fontSize={18} />
              </Grid>
            </Grid>
            <Grid className={classes.card}>
              <Typography component="div">
                <Box
                  fontSize={180}
                  fontWeight={700}
                  style={{
                    lineHeight: 1.3,
                    textAlign: 'center',
                    position: 'absolute',
                    top: 8,
                    left: 64,
                    zIndex: 2,
                    opacity: 0.1,
                    color: '#fff',
                    textShadow: '1px 1px 2px #000',
                  }}
                >
                  03
                </Box>
              </Typography>
              <RiHandCoinLine fontSize={72} className={classes.icon} />
              <Typography component="div">
                <Box fontSize={18} fontWeight={700} className={classes.title}>
                  Create Your Own Charity Project
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={15}
                  fontWeight={400}
                  className={classes.description}
                >
                  You can create a charity project for a specified amount or
                  time. Everyone will review and donate for you
                </Box>
              </Typography>
              <Grid className={classes.buttonFake}>
                <AiOutlineArrowRight fontSize={18} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.achievement}>
        <Grid style={{ position: 'relative', width: '100%' }}>
          <Typography component="div">
            <Box
              fontSize={20}
              fontWeight={600}
              style={{
                marginBottom: 12,
                color: PRIMARY_COLOR,
                textAlign: 'center',
              }}
            >
              + What I did
            </Box>
          </Typography>
          <Typography component="div">
            <Box
              fontSize={60}
              fontWeight={800}
              style={{
                marginBottom: 12,
                color: TEXT_COLOR,
                opacity: 0.1,
                position: 'absolute',
                fontFamily: '"Shadows Into Light",cursive',
                top: -36,
                left: '40%',
              }}
            >
              Achievements
            </Box>
          </Typography>
          <Typography component="div">
            <Box
              fontSize={42}
              fontWeight={700}
              style={{
                marginBottom: 40,
                lineHeight: 1.3,
                letterSpacing: -0.5,
                textAlign: 'center',
              }}
            >
              Achievements
            </Box>
          </Typography>
        </Grid>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          className={classes.numberContainer}
        >
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <AiOutlineProject fontSize={64} style={{ color: '#fff' }} />
            <Box style={{ marginLeft: 16 }}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <CountUp
                  end={1236}
                  duration={2}
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                />
                <Typography component="div">
                  <Box fontSize={32} fontWeight={800} style={{ color: '#fff' }}>
                    +
                  </Box>
                </Typography>
              </Box>
              <Typography component="div">
                <Box fontSize={18} fontWeight={400} style={{ color: '#fff' }}>
                  Projects
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HiUserGroup fontSize={64} style={{ color: '#fff' }} />
            <Box style={{ marginLeft: 16 }}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <CountUp
                  end={2321}
                  duration={2}
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                />
                <Typography component="div">
                  <Box fontSize={32} fontWeight={800} style={{ color: '#fff' }}>
                    +
                  </Box>
                </Typography>
              </Box>
              <Typography component="div">
                <Box fontSize={18} fontWeight={400} style={{ color: '#fff' }}>
                  Users
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <BiDonateHeart fontSize={64} style={{ color: '#fff' }} />
            <Box style={{ marginLeft: 16 }}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <CountUp
                  end={3021}
                  duration={2}
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                />
                <Typography component="div">
                  <Box fontSize={32} fontWeight={800} style={{ color: '#fff' }}>
                    +
                  </Box>
                </Typography>
              </Box>
              <Typography component="div">
                <Box fontSize={18} fontWeight={400} style={{ color: '#fff' }}>
                  Donations
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <FaMoneyBillAlt fontSize={64} style={{ color: '#fff' }} />
            <Box style={{ marginLeft: 16 }}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <CountUp
                  end={3}
                  duration={2}
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                />
                <Typography component="div">
                  <Box fontSize={32} fontWeight={800} style={{ color: '#fff' }}>
                    M+
                  </Box>
                </Typography>
              </Box>
              <Typography component="div">
                <Box fontSize={18} fontWeight={400} style={{ color: '#fff' }}>
                  Dollar in donations
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}

export default AboutScreen
