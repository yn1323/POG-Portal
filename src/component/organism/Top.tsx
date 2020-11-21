import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { fetchTotal } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import SimplateTableData from 'src/component/template/SimplateTableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetch(fetchTotal)
  return (
    <Suspense fallback={<Spinner />}>
      <SimplateTableData
        header={api.top.header}
        tbody={api.top.tbody}
      ></SimplateTableData>
    </Suspense>
  )
}
