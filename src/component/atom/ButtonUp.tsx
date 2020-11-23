import React, { memo } from 'react'
import { IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'

interface Props {
  setter: () => void
}

export default memo(({ setter }: Props) => {
  return (
    <IconButton color="primary" onClick={setter}>
      <ExpandLess />
    </IconButton>
  )
})
