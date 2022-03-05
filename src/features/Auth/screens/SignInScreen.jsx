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
import {} from 'react-icons/io'
import TextField from 'components/TextField/TextField'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import backgroundLoginSVG from 'assets/backgroundLogin.jpg'
import Divider from 'components/Divider/Divider'
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
  signinForm: {
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
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: '#fff',
    '&:hover': {
      boxShadow:
        'rgba(0, 0, 0, 0.03) 0px 1px 2px, rgba(0, 0, 0, 0.03) 0px 2px 4px, rgba(0, 0, 0, 0.03) 0px 4px 8px, rgba(0, 0, 0, 0.03) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      background: PRIMARY_COLOR,
    },
  },
  forgotPassword: {
    fontSize: 12,
    color: '#878787',
    fontWeight: 300,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  buttonGoogle: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(1, 4),
    background: 'rgba(64,87,109,.07)',
    boxShadow: 'none',
    borderRadius: 6,
    color: TEXT_COLOR,
    textTransform: 'initial',
    transition: 'linear 0.3s',
    '&:hover': {
      background: 'rgba(64,87,109,.14)',
      boxShadow: 'none',
    },
  },
}))

function SignInScreen() {
  const classes = useStyles()

  const navigate = useNavigate()

  const [inputValues, setInputValue] = useState({
    email: '',
    password: '',
  })

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleChangeInput = (event) => {
    const { name, value } = event.target
    setInputValue({ ...inputValues, [name]: value })
  }

  const handleShowPassword = () => setIsShowPassword(!isShowPassword)

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container>
        <Fade in timeout={600}>
          <Grid item xs={12} sm={8} className={classes.imageContainer} />
        </Fade>
        <Slide direction="left" in timeout={500}>
          <Grid item xs={12} sm={4} className={classes.signinForm}>
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
            <Typography component="div">
              <Box fontSize={24} fontWeight={700}>
                Login to account
              </Box>
            </Typography>
            <Typography component="div">
              <Box fontSize={15} fontWeight={400} color="#878787">
                Please sign-in to your account
              </Box>
            </Typography>
            <ValidatorForm className={classes.validationForm}>
              <TextField
                size="small"
                name="email"
                fullWidth
                autoFocus
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
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                  type="submit"
                >
                  Sign in
                </Button>
                <Typography component="div" className={classes.forgotPassword}>
                  <Box>Forget password?</Box>
                </Typography>
              </Box>
            </ValidatorForm>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              marginTop={2}
            >
              <Divider>
                <Typography component="div">
                  <Box
                    fontSize={11}
                    fontWeight={300}
                    style={{
                      color: '#878787',
                    }}
                  >
                    Or
                  </Box>
                </Typography>
              </Divider>

              <Button
                fullWidth
                variant="contained"
                startIcon={<FcGoogle />}
                className={classes.buttonGoogle}
              >
                Sign in with Google
              </Button>
            </Box>
            <Box display="flex" flexDirection="row" marginTop={1}>
              <Typography component="div" style={{ marginRight: 4 }}>
                <Box
                  fontSize={13}
                  fontWeight={400}
                  style={{ color: '#878787' }}
                >
                  Create new account?
                </Box>
              </Typography>
              <Typography
                component="div"
                onClick={() => navigate('/signup')}
                style={{ cursor: 'pointer' }}
              >
                <Box fontSize={13} fontWeight={600}>
                  Sign up
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Slide>
      </Grid>
    </Container>
  )
}

export default SignInScreen
