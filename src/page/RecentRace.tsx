import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRace, fetchRaceUrl } from 'src/store/api'
import { useUrlLoading, useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import ClickableTableData from 'src/component/template/ClickableTableData'
import { ApiState, State } from 'src/type/state'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { api = {} as ApiState } = useSelector((state: State) => state)
  const raceUrls = api.race.url
  const { url = [] as string[] } = useSelected()
  const currentLoading = useUrlLoading()

  useFetch({ action: fetchRaceUrl, watch: [url], param: { url } })

  useEffect(() => {
    const f = async (targetUrl: string) => {
      await dispatch(await fetchRace({ url: targetUrl }))
    }
    if (raceUrls?.length) {
      raceUrls.forEach((targetUrl: string) => {
        f(targetUrl)
      })
    }
  }, raceUrls)
  return api.isLoading ? (
    <Spinner text={currentLoading} />
  ) : (
    <></>
    // <ClickableTableData
    //   header={api.top.header}
    //   tbody={api.top.tbody}
    //   meta={api.top.meta}
    //   callback={(d: any) => callback(d)}
    // ></ClickableTableData>
  )
}
