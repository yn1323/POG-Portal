import React from 'react'
import { useSelector } from 'react-redux'
import { fetchDetail } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import TableData from 'src/component/template/TableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetch(fetchDetail)
  return api.isLoading ? (
    <Spinner />
  ) : (
    <TableData header={api.detail.header} tbody={api.detail.tbody}></TableData>
  )
}
