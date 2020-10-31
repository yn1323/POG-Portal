import React, { memo } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

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
  setter: () => void
}

export default memo(({ setter }: Props) => {
  const classes = useStyles()
  return (
    <IconButton color="primary" onClick={setter}>
      <ExpandMore />
    </IconButton>
  )
})
