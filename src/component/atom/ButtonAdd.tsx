import React, { memo } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { PlaylistAdd } from '@material-ui/icons'

const useStyles = makeStyles(() => {
  return {
    root: {
      '& > *': {
        width: '95%',
      },
    },
  }
})

interface Props {
  add: () => void
}

export default memo(({ add }: Props) => {
  const classes = useStyles()
  return (
    <IconButton color="primary" className={classes.root} onClick={add}>
      <PlaylistAdd />
    </IconButton>
  )
})
