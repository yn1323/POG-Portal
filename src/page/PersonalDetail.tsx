import React from 'react'
import { useSelector } from 'react-redux'
import { fetchDetail } from 'src/store/api'
import { useFetchWithUrl } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import SimplateTableData from 'src/component/template/SimplateTableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  useFetchWithUrl(fetchDetail, api.detailUrl)
  return api.isLoading ? (
    <Spinner />
  ) : (
    <SimplateTableData
      header={api.detail.header}
      tbody={api.detail.tbody}
    ></SimplateTableData>
  )
}
