import React from 'react'
import { useSelector } from 'react-redux'
import { fetchDetail } from 'src/store/api'
import { useFetch } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import SimpleTableData from 'src/component/template/SimpleTableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)

  useFetch({ action: fetchDetail, param: { url: api.detailUrl } })
  return api.isLoading ? (
    <Spinner />
  ) : (
    <SimpleTableData
      header={api.detail.header}
      tbody={api.detail.tbody}
    ></SimpleTableData>
  )
}
