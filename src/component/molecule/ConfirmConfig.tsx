import React, { memo } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

import { useStyles } from 'src/constant'

const customStyles = makeStyles({
  root: {
    width: '95%',
  },
})

interface Props {
  confirm: () => JSX.Element
}

export default memo(({ confirm }: Props) => {
  const classes = useStyles()
  const cclasses = customStyles()
  return (
    <Box className={classes.stickBottomInTab}>
      <Container>
        <Box className={cclasses.root}>{confirm()}</Box>
      </Container>
    </Box>
  )
})
