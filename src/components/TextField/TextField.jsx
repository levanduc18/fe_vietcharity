import { makeStyles } from '@mui/styles'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { TextValidator } from 'react-material-ui-form-validator'

const useStyles = makeStyles(() => ({
  root: {
    '& input::placeholder': {
      color: 'rgba(0,0,0,1)',
    },
    '& .Mui-focused fieldset': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },
    '& .Mui-error fieldset': {
      border: '1px red solid',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderRadius: 6,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
      },
      '&::placeholder': {
        color: 'black',
      },
    },
  },
}))

function TextField(props) {
  const classes = useStyles()
  const {
    name,
    value,
    type,
    onChange,
    fullWidth,
    placeholder,
    size,
    autoFocus,
    validators,
    errorMessages,
    InputProps,
  } = props
  return (
    <TextValidator
      id={name}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      className={classes.root}
      variant="outlined"
      margin="dense"
      InputLabelProps={{
        shrink: true,
      }}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      placeholder={placeholder}
      size={size}
      validators={validators}
      errorMessages={errorMessages}
      InputProps={InputProps}
    />
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  validators: PropTypes.array.isRequired,
  errorMessages: PropTypes.array.isRequired,
  InputProps: PropTypes.object,
  autoFocus: PropTypes.bool,
}

export default TextField
