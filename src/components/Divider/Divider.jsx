import React from 'react'
import { Grid, Divider as MuiDivider } from '@mui/material'

// eslint-disable-next-line react/prop-types
function Divider({ children, textAlign, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid container alignItems="center" spacing={3} {...props}>
      <Grid item xs={textAlign === 'left' ? 2 : true}>
        <MuiDivider />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item xs={textAlign === 'right' ? 2 : true}>
        <MuiDivider />
      </Grid>
    </Grid>
  )
}

export default Divider
