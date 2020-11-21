import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDetailUrl, fetchTotal } from 'src/store/api'
import { useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import ClickableTableData from 'src/component/template/ClickableTableData'
import { ApiState, State } from 'src/type/state'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { api = {} as ApiState } = useSelector((state: State) => state)
  if (useSelected()) {
    useFetch(fetchTotal)
  }
  const callback = (d: any) => {
    dispatch(setDetailUrl({ url: d.url }))
    history.push(`/detail`)
  }
  return api.isLoading ? (
    <Spinner />
  ) : (
    <ClickableTableData
      header={api.top.header}
      tbody={api.top.tbody}
      meta={api.top.meta}
      callback={(d: any) => callback(d)}
    ></ClickableTableData>
  )
}
