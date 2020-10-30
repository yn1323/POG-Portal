import React, { memo } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { PlaylistAdd } from '@material-ui/icons'

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    root: {
      '& > *': {
        width: '95%',
      },
    },
  }
})
export default memo(() => {
  const classes = useStyles()
  return (
    <IconButton color="primary" className={classes.root}>
      <PlaylistAdd />
    </IconButton>
  )
})
