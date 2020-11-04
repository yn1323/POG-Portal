import React, { Suspense } from 'react'
import Route from 'src/route'

import NavigationTop from 'src/component/organism/NavigationTop'
import NavigationBottom from 'src/component/organism/NavigationBottom'
import { Box } from '@material-ui/core'
import Spinner from 'src/component/molecule/CenterSpinner'

export default () => {
  return (
    <>
      <NavigationTop />
      <Box m={1} py={6}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      <NavigationBottom />
    </>
  )
}
