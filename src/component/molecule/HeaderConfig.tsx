import React, { memo } from 'react'
import { Box, Container } from '@material-ui/core'

import { useStyles } from 'src/constant'

interface Props {
  add: () => JSX.Element
}

export default memo(({ add }: Props) => {
  const classes = useStyles()
  return (
    <Container className={classes.stickTopInTab}>
      <Box display="flex" flexDirection="row-reverse">
        {add()}
      </Box>
    </Container>
  )
})
