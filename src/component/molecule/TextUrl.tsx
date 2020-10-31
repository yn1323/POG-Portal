import { Box } from '@material-ui/core'
import React from 'react'

interface Props {
  pageName: () => JSX.Element
  url: () => JSX.Element
}

export default ({ pageName, url }: Props) => {
  return (
    <Box mb={2}>
      <>{pageName()}</>
      <>{url()}</>
    </Box>
  )
}
