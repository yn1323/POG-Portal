import React, { memo } from 'react'
import { Box, Container, Divider, Grid } from '@material-ui/core'

interface Props {
  pageName: () => JSX.Element
  url: () => JSX.Element
  moveup?: () => JSX.Element
  movedown?: () => JSX.Element
}

export default memo(({ pageName, url, moveup, movedown }: Props) => {
  return (
    <Box mb={2}>
      <Grid container>
        <Grid item xs={10}>
          {pageName()}
          {url()}
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" alignItems="center" css={{ height: '100%' }}>
            <Container>
              <>　</>
              {moveup ? moveup() : <>　</>}
              {movedown ? movedown() : <>　</>}
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  )
})
