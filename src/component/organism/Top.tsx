import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { fetchTotal } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import TableData from 'src/component/template/TableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetch(fetchTotal)
  return (
    <Suspense fallback={<Spinner />}>
      <TableData header={api.top.header} tbody={api.top.tbody}></TableData>
    </Suspense>
  )
}
