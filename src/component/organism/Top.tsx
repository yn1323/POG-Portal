import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { fetchTotal } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import TableData from 'src/component/template/TableData'
import { ApiState, State } from 'src/type/state'

// const HelloSuspenseWorld = () => {
//   if (cache) {
//     return cache
//   }

//   throw new Promise(async resolve => {
//     await sleep(5)
//     cache = 'hello, suspense world!'
//     resolve()
//   })
// }

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetch(fetchTotal)
  return (
    <Suspense fallback={<Spinner />}>
      <TableData header={api.top.header} tbody={api.top.tbody}></TableData>
    </Suspense>
  )
}
