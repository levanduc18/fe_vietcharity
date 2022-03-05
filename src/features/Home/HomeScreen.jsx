import {
  Avatar,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Slide,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'
import { Image } from 'mui-image'
import Charity4JPG from 'assets/charity4.jpg'
import Charity5JPG from 'assets/charity5.jpg'
import Charity3JPG from 'assets/charity3.jpg'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import backgroundGradient from 'assets/backgroundGradient.jpg'
import line1PNG from 'assets/line1.png'
import linePNG from 'assets/line.png'
import { BsBook } from 'react-icons/bs'
import { GiMedicalDrip, GiClothes } from 'react-icons/gi'
import { MdDone, MdFastfood } from 'react-icons/md'
import { HiOutlineOfficeBuilding, HiUserGroup } from 'react-icons/hi'
import { RiMusic2Line } from 'react-icons/ri'
import ducImage from 'assets/ducimage.jpg'
import cardBackground from 'assets/cardBackground.png'
import avatarDuc from 'assets/avatarDuc.jpg'
import ProjectCard from 'components/ProjectCard/ProjectCard'
import Carousel from 'react-grid-carousel'
import CountUp from 'react-countup'
import { BiDonateHeart } from 'react-icons/bi'
import { FaChevronRight, FaMoneyBillAlt } from 'react-icons/fa'
import startJPG from 'assets/start.jpg'
import LazyLoad from 'react-lazyload'

const fakeData = [
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Sport',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 213123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 312312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Food',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 52232,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Music',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc123',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 72312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'hello',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Du323c',
    projectName: 'COVID-19 V3123accine Have Already Begun Introduced Countries',
    currentAmount: 231223,
    amountNeeded: 512312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
  {
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
    category: 'Technology',
    avatar:
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/245783871_3258036494417154_4029497244684396651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rqOTffCFcWAAX-wtp5d&tn=feSizo9m0gfrmoLu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_YE0czIxYEpPq4LDRlWMCrl7csSu2EcrYSgYUSi8H-WA&oe=62245E92',
    authorName: 'Le Van Duc',
    projectName: 'COVID-19 Vaccine Have Already Begun Introduced Countries',
    currentAmount: 23123,
    amountNeeded: 32312,
    createdAt: '2020-11-23T06:04:10.535+00:00',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  container: {
    padding: theme.spacing(28, 18, 56, 18),
    marginTop: -128,
    backgroundImage: `url(${backgroundGradient})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: '50%',
    backgroundColor: '#fde2b7',
  },
  fadeContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonExplore: {
    padding: theme.spacing(2, 4),
    borderRadius: 30,
    fontWeight: 700,
    fontSize: 16,
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: TEXT_COLOR,
    border: '2px solid #e3cda8',
    transition: 'linear 0.3s',
    '&:hover': {
      background: '#000',
      boxShadow: 'none',
      color: '#fff',
      borderRadius: 6,
      border: '2px solid #e3cda8',
    },
  },
  imageContainer: {
    marginTop: theme.spacing(2),
    position: 'absolute',
    bottom: -400,
    left: 72,
  },
  categoryContainer: {
    padding: theme.spacing(2, 18),
  },
  category: {
    width: 380,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 32,
    paddingRight: 32,
    boxSizing: 'border-box',
    boxShadow: '0 10px 30px 0 hsl(0deg 0% 87% / 50%)',
    borderBottom: '5px solid transparent',
    borderRight: '5px solid transparent',
    transition: 'all 0.8s ease-in-out',
    margin: 16,
    '&:hover': {
      borderBottom: `5px ${PRIMARY_COLOR} solid `,
      borderRight: `5px ${PRIMARY_COLOR} solid `,
      boxSizing: 'border-box',
    },
  },
  aboutme: {
    width: '100%',
    paddingLeft: 160,
    paddingRight: 160,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:before': {
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,97%,0),rgba(253,155,2,.302))',
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 380,
      zIndex: -1,
    },
  },
  numberContainer: {
    background: PRIMARY_COLOR,
    width: '80%',
    padding: '40px 64px',
    position: 'absolute',
    bottom: -64,
    left: '10%',
  },
  fund: {
    width: '100%',
    display: 'flex',
    height: 560,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 80,
    paddingTop: 120,
    position: 'relative',
    '&:before': {
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,97%,0),rgba(253,155,2,.302))',
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 320,
      zIndex: -1,
    },
  },
  start: {
    width: '42%',
    height: 'auto',
    backgroundImage: `url(${startJPG})`,
    backgroundSize: 'cover',
  },
}))

function HomeScreen() {
  const classes = useStyles()
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container className={classes.container}>
        <Fade in timeout={1000}>
          <Grid container className={classes.fadeContainer}>
            <Image
              src={line1PNG}
              style={{
                width: 'auto',
                height: '40vh',
                position: 'absolute',
                top: '30vh',
                left: 100,
                opacity: 0.1,
              }}
            />
            <Image
              src={linePNG}
              style={{
                width: 'auto',
                height: '64vh',
                position: 'absolute',
                top: 0,
                right: 0,
                opacity: 0.1,
              }}
            />
            <Grid
              style={{
                width: 25,
                height: 25,
                borderRadius: '50%',
                position: 'absolute',
                top: '45vh',
                left: 200,
                border: '5px #24ff00 solid',
              }}
            />
            <Grid
              style={{
                width: 25,
                height: 25,
                borderRadius: '50%',
                position: 'absolute',
                top: '30vh',
                right: 180,
                border: '5px #ff8a00 solid',
              }}
            />
            <Typography component="div">
              <Box
                fontSize={22}
                fontWeight={700}
                style={{ lineHeight: 1.4, marginBottom: 20, display: 'block' }}
              >
                Crowdfunding Website
              </Box>
            </Typography>
            <Typography component="div">
              <Box
                fontSize={96}
                fontWeight={700}
                style={{
                  lineHeight: 1.2,
                  letterSpacing: -4,
                  marginBottom: 40,
                  paddingLeft: 144,
                  paddingRight: 144,
                  textAlign: 'center',
                }}
              >
                All great things have small beginnings
              </Box>
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.buttonExplore}
              endIcon={<FiArrowRight />}
            >
              Explore Projects
            </Button>
          </Grid>
        </Fade>
      </Grid>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className={classes.imageContainer}
      >
        <Image
          src={Charity5JPG}
          style={{
            width: '18vw',
            height: 'auto',
            borderTopLeftRadius: 175,
            borderTopRightRadius: 175,
            borderBottomLeftRadius: 175,
            borderBottomRightRadius: 0,
            marginRight: 24,
          }}
        />
        <Image
          src={Charity4JPG}
          style={{
            width: '50vw',
            height: 'auto',
            marginRight: 24,
          }}
        />
        <Image
          src={Charity3JPG}
          style={{
            width: '18vw',
            height: 'auto',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 175,
            borderBottomLeftRadius: 175,
            borderBottomRightRadius: 175,
          }}
        />
      </Box>
      <Grid className={classes.categoryContainer}>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          style={{ marginTop: 80 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            style={{ width: '100%', marginTop: 240 }}
          >
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
                  + What we do
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
                  Category
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={32}
                  fontWeight={800}
                  style={{ marginBottom: 40 }}
                >
                  Popular categories
                </Box>
              </Typography>
            </Grid>
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<FaChevronRight />}
            >
              View All Category
            </Button>
          </Box>
        </Grid>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          style={{ width: '100%' }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <BsBook
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Education
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  School, University & Scholar
                </Box>
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <GiMedicalDrip
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Medical & Health
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  Medical, Blood Donation & Care
                </Box>
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <RiMusic2Line
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Music
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  Fundraiser music night
                </Box>
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <GiClothes
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Clothes
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  Clothes, shoes & hats
                </Box>
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <HiOutlineOfficeBuilding
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Building
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  Build, renovate a charitable house
                </Box>
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.category}
          >
            <Grid item>
              <MdFastfood
                fontSize={54}
                style={{ color: PRIMARY_COLOR, marginRight: 24, marginTop: 12 }}
              />
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box fontSize={22} fontWeight={700} style={{ marginBottom: 4 }}>
                  Food
                </Box>
              </Typography>
              <Typography component="div">
                <Box fontSize={16} fontWeight={400}>
                  Food, Water & Plants
                </Box>
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container flexDirection="row" className={classes.aboutme}>
        <LazyLoad>
          <Slide direction="right" in timeout={600}>
            <Grid>
              <Image src={ducImage} style={{ width: '35vw', height: 'auto' }} />
            </Grid>
          </Slide>
        </LazyLoad>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          style={{ marginTop: 80, width: '40vw' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            style={{ padding: 100 }}
          >
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
                  + Who am I
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
                  fontSize={32}
                  fontWeight={800}
                  style={{ marginBottom: 40 }}
                >
                  Why Choose My Website
                </Box>
              </Typography>
              <Typography component="div">
                <Box
                  fontSize={20}
                  fontWeight={400}
                  style={{ marginBottom: 32 }}
                >
                  We want to ensure the core value of charity, want to spread
                  love everywhere, so our charity website uses new technology,
                  ensuring a good user experience
                </Box>
              </Typography>
            </Grid>
            <Grid
              style={{
                width: '100%',
                height: 240,
                backgroundColor: PRIMARY_COLOR,
                borderRadius: 6,
                position: 'relative',
              }}
            >
              <Grid
                style={{
                  backgroundImage: `url(${cardBackground})`,
                  opacity: 0.1,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
              <Grid
                style={{ position: 'absolute', top: 0, left: 0, padding: 24 }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="flex-start"
                  style={{ marginBottom: 8 }}
                >
                  <MdDone
                    fontSize={18}
                    style={{ marginRight: 12, color: '#fff' }}
                  />
                  <Typography component="div">
                    <Box fontSize={16} fontWeight={500} color="#fff">
                      Non-Profit Crowdfunding Website
                    </Box>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="flex-start">
                  <MdDone
                    fontSize={18}
                    style={{ marginRight: 12, color: '#fff' }}
                  />
                  <Typography component="div">
                    <Box fontSize={16} fontWeight={500} color="#fff">
                      Applying blockchain for charity fund transparency
                    </Box>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  style={{ marginTop: 24 }}
                >
                  <Avatar
                    src={avatarDuc}
                    style={{ width: 56, height: 56, marginRight: 16 }}
                  />
                  <Box>
                    <Typography component="div">
                      <Box fontSize={18} fontWeight={600} color="#fff">
                        Le Van Duc
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontSize={16} fontWeight={500} color="#fff">
                        Student of PFIEV, Danang University of Science &
                        Technology
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        style={{
          width: '100%',
          background: TEXT_COLOR,
          paddingTop: 100,
          paddingBottom: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography component="div">
          <Box
            fontSize={20}
            fontWeight={600}
            style={{
              marginBottom: 12,
              color: PRIMARY_COLOR,
            }}
          >
            + Popular Projects
          </Box>
        </Typography>
        <Typography component="div">
          <Box
            fontSize={60}
            fontWeight={800}
            style={{
              marginBottom: 12,
              color: '#898989',
              opacity: 0.1,
              position: 'absolute',
              fontFamily: '"Shadows Into Light",cursive',
              top: 64,
              left: '42%',
            }}
          >
            Our Projects
          </Box>
        </Typography>
        <Typography component="div">
          <Box
            fontSize={36}
            fontWeight={800}
            style={{ marginBottom: 40, color: '#fff' }}
          >
            Explore Our Projects
          </Box>
        </Typography>
        <LazyLoad>
          <Carousel
            cols={4}
            rows={1}
            gap={24}
            loop
            containerStyle={{ width: '98vw' }}
            autoplay={fakeData.length * 400}
          >
            {fakeData.map((item, index) => (
              <Carousel.Item>
                <ProjectCard item={item} key={index} />
              </Carousel.Item>
            ))}
          </Carousel>
        </LazyLoad>
        <LazyLoad height={100}>
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
                    <Box
                      fontSize={32}
                      fontWeight={800}
                      style={{ color: '#fff' }}
                    >
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
                    <Box
                      fontSize={32}
                      fontWeight={800}
                      style={{ color: '#fff' }}
                    >
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
                    <Box
                      fontSize={32}
                      fontWeight={800}
                      style={{ color: '#fff' }}
                    >
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
                    <Box
                      fontSize={32}
                      fontWeight={800}
                      style={{ color: '#fff' }}
                    >
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
        </LazyLoad>
      </Grid>

      <Grid className={classes.fund}>
        <Grid className={classes.start}>
          <Grid
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: TEXT_COLOR,
              opacity: 0.9,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 160,
              paddingRight: 160,
            }}
          >
            <Typography component="div">
              <Box fontSize={32} fontWeight={700} style={{ color: '#fff' }}>
                Start FundRasing?
              </Box>
            </Typography>
            <Typography component="div">
              <Box
                fontSize={16}
                fontWeight={400}
                style={{ color: '#fff' }}
                textAlign="center"
                marginTop={2}
              >
                You want to start a charity project for helping other people?
                Click the button below
              </Box>
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              style={{ marginTop: 32 }}
              endIcon={<FiArrowRight />}
            >
              Start a Funden
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeScreen
