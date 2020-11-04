import * as React from 'react'
import { Grid } from '@material-ui/core'

interface Props {
  children: JSX.Element | React.FC
}

export default ({ children }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}
    >
      {children}
    </Grid>
  )
}
