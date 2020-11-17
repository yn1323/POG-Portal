import React from 'react'
import { useSelector } from 'react-redux'
import { fetchTotal } from 'src/store/api'
import { useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import TableData from 'src/component/template/TableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  if (useSelected()) {
    useFetch(fetchTotal)
  }
  return api.isLoading ? (
    <Spinner />
  ) : (
    <TableData header={api.top.header} tbody={api.top.tbody}></TableData>
  )
}
