import React, { Suspense } from 'react'
import Route from 'src/route'

import NavigationTop from 'src/component/organism/NavigationTop'
import NavigationBottom from 'src/component/organism/NavigationBottom'
import { Box } from '@material-ui/core'
import Spinner from 'src/component/molecule/CenterSpinner'
import { useSelected } from 'src/helper'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  if (!useSelected()) {
    history.push('/config')
  }
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  const padding = process.env.NODE_ENV === 'production' ? 0 : 6

  return (
    <>
      <NavigationTop />
      <Box m={1} py={padding}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      <NavigationBottom />
    </>
  )
}
