import { Box, Divider } from '@material-ui/core'
import React, { memo } from 'react'

interface Props {
  pageName: () => JSX.Element
  url: () => JSX.Element
}

export default memo(({ pageName, url }: Props) => {
  return (
    <Box mb={2}>
      <>{pageName()}</>
      <>{url()}</>
      <Divider />
    </Box>
  )
})
