import React from 'react'
import { useSelector } from 'react-redux'
import { fetchHorse } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import TableData from 'src/component/template/TableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetch(fetchHorse)
  return api.isLoading ? (
    <Spinner />
  ) : (
    <TableData header={api.horse.header} tbody={api.horse.tbody}></TableData>
  )
}
