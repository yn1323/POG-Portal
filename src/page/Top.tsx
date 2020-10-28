import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@material-ui/core'

import { State, SelectionState } from 'src/type/state'

export default () => {
  const { selection = {} as SelectionState } = useSelector(
    (state: State) => state
  )
  console.log(selection)
  return <Box m={1}>Top</Box>
}
