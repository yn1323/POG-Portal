import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRace, fetchRaceUrl } from 'src/store/api'
import { useUrlLoading, useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import ClickableTableData from 'src/component/template/ClickableTableData'
import { ApiState, State } from 'src/type/state'
import { useHistory } from 'react-router-dom'
import { Box } from '@material-ui/core'

export default () => {
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

  const callback = (d: any) => {
    console.log(d)
  }
  return api.isLoading ? (
    <Spinner text={currentLoading} />
  ) : api.race.tbody?.length ? (
    <ClickableTableData
      header={api.race.header}
      tbody={api.race.tbody}
      meta={api.race.matchedMeta}
      callback={(d: any) => callback(d)}
    ></ClickableTableData>
  ) : (
    <Box>出走予定なし</Box>
  )
}
