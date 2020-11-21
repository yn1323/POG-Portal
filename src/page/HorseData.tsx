import React from 'react'
import { useSelector } from 'react-redux'
import { fetchHorse } from 'src/store/api'
import { useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import SimplateTableData from 'src/component/template/SimplateTableData'
import { ApiState, State } from 'src/type/state'

export default () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  const { url } = useSelected()

  useFetch({ action: fetchHorse, param: { url } })

  return api.isLoading ? (
    <Spinner />
  ) : (
    <SimplateTableData
      header={api.horse.header}
      tbody={api.horse.tbody}
    ></SimplateTableData>
  )
}
