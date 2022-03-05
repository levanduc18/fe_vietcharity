import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  Slide,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ValidatorForm } from 'react-material-ui-form-validator'
import TextField from 'components/TextField/TextField'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { MdDone } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { IoIosArrowBack } from 'react-icons/io'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import backgroundLoginSVG from 'assets/backgroundLogin.jpg'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { RiHeartsFill } from 'react-icons/ri'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  imageContainer: {
    backgroundImage: `url(${backgroundLoginSVG})`,
    backgroundSize: 'cover',
  },
  signUpForm: {
    padding: theme.spacing(10),
    backgroundColor: '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  validationForm: {
    marginTop: 16,
  },
  button: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(0.75, 4),
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 16,
    textTransform: 'initial',
    boxShadow: 'none',
    transition: 'linear 0.3s',
    color: '#fff',
    '&:hover': {
      boxShadow:
        'rgba(0, 0, 0, 0.03) 0px 1px 2px, rgba(0, 0, 0, 0.03) 0px 2px 4px, rgba(0, 0, 0, 0.03) 0px 4px 8px, rgba(0, 0, 0, 0.03) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      background: PRIMARY_COLOR,
    },
  },
  buttonGoogle: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(0.75, 4),
    background: 'rgba(64,87,109,.07)',
    boxShadow: 'none',
    color: TEXT_COLOR,
    transition: 'linear 0.3s',
    borderRadius: 6,
    textTransform: 'initial',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.03)',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
  },
}))

function SignUpScreen() {
  const classes = useStyles()

  const navigate = useNavigate()

  const [inputValues, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [isShowSignUpWithEmail, setIsShowSignUpWithEmail] = useState(false)

  const handleChangeInput = (event) => {
    const { name, value } = event.target
    setInputValue({ ...inputValues, [name]: value })
  }

  const handleShowPassword = () => setIsShowPassword(!isShowPassword)

  const handleChangeIsSignUpWithEmail = () =>
    setIsShowSignUpWithEmail(!isShowSignUpWithEmail)

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container>
        <Fade in timeout={600}>
          <Grid item xs={12} sm={8} className={classes.imageContainer} />
        </Fade>
        <Slide direction="left" in timeout={500}>
          <Grid item xs={12} sm={4} className={classes.signUpForm}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              marginBottom={5}
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
            {!isShowSignUpWithEmail && (
              <Grid>
                <Typography component="div">
                  <Box fontSize={22} fontWeight={700}>
                    Get started with VietCharity
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box fontSize={13} fontWeight={400} color="#878787">
                    Sign up to discover the full power of VietCharity
                  </Box>
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  style={{ marginTop: 12 }}
                >
                  <MdDone fontSize={15} style={{ marginRight: 12 }} />
                  <Typography component="div">
                    <Box fontSize={15} fontWeight={400} color="#878787">
                      Create new project of crowdfunding
                    </Box>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <MdDone fontSize={15} style={{ marginRight: 12 }} />
                  <Typography component="div">
                    <Box fontSize={15} fontWeight={400} color="#878787">
                      Get recommended projects feature
                    </Box>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <MdDone fontSize={15} style={{ marginRight: 12 }} />
                  <Typography component="div">
                    <Box fontSize={15} fontWeight={400} color="#878787">
                      And more features ...
                    </Box>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  marginTop={2}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<FcGoogle />}
                    className={classes.buttonGoogle}
                  >
                    Sign up with Google
                  </Button>
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={handleChangeIsSignUpWithEmail}
                    style={{ marginTop: -8 }}
                  >
                    Sign up with Email
                  </Button>
                </Box>
              </Grid>
            )}

            {isShowSignUpWithEmail && (
              <Grid>
                <Button
                  onClick={handleChangeIsSignUpWithEmail}
                  startIcon={<IoIosArrowBack />}
                  style={{
                    marginTop: -12,
                    marginBottom: 12,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Back
                </Button>
                <Typography component="div">
                  <Box fontSize={22} fontWeight={700}>
                    Create new account
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box fontSize={13} fontWeight={400} color="#878787">
                    Please enter all your information below
                  </Box>
                </Typography>
                <ValidatorForm className={classes.validationForm}>
                  <TextField
                    size="small"
                    autoFocus
                    name="name"
                    fullWidth
                    placeholder="Name"
                    type="text"
                    onChange={handleChangeInput}
                    value={inputValues.name}
                    validators={['required']}
                    errorMessages={['Name is required']}
                  />
                  <TextField
                    size="small"
                    name="email"
                    fullWidth
                    placeholder="E-mail Address"
                    type="text"
                    onChange={handleChangeInput}
                    value={inputValues.email}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'Email is required',
                      'Email must be a valid email address',
                    ]}
                  />
                  <TextField
                    size="small"
                    name="password"
                    fullWidth
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={handleChangeInput}
                    value={inputValues.password}
                    validators={[
                      'required',
                      'minStringLength:6',
                      'maxStringLength:255',
                    ]}
                    errorMessages={[
                      'Password is required',
                      'Password must be minimum of 6 characters ',
                      'Password must be maximum of 255 characters',
                    ]}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            style={{ fontSize: 15 }}
                          >
                            {isShowPassword ? <FiEyeOff /> : <FiEye />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </ValidatorForm>
              </Grid>
            )}
            <Box display="flex" flexDirection="row" marginTop={1}>
              <Typography component="div" style={{ marginRight: 4 }}>
                <Box
                  fontSize={13}
                  fontWeight={400}
                  style={{ color: '#878787' }}
                >
                  Already have an account?
                </Box>
              </Typography>
              <Typography
                component="div"
                onClick={() => navigate('/signin')}
                style={{ cursor: 'pointer' }}
              >
                <Box fontSize={13} fontWeight={600}>
                  Sign in
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Slide>
      </Grid>
    </Container>
  )
}

export default SignUpScreen
