import React from 'react'
import { Box } from '@material-ui/core'
import { fetchTotal } from 'src/store/api'
import { useFetch } from 'src/helper'

export default () => {
  useFetch(fetchTotal)
  return <Box m={1}>Top</Box>
}
