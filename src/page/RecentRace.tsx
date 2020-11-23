import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRace, fetchRaceUrl } from 'src/store/api'
import { useUrlLoading, useFetch, useSelected } from 'src/helper'

import Spinner from 'src/component/molecule/CenterSpinner'
import ClickableTableData from 'src/component/template/ClickableTableData'
import SimpleTableDataV from 'src/component/template/SimpleTableDataV'
import SimpleDialog from 'src/component/template/SimpleDialog'

import { ApiState, State } from 'src/type/state'
import { Box } from '@material-ui/core'

export default () => {
  const dispatch = useDispatch()
  const { api = {} as ApiState } = useSelector((state: State) => state)
  const raceUrls = api.race.url
  const { url = [] as string[] } = useSelected()
  const currentLoading = useUrlLoading()
  const [open, setOpen] = useState(false)
  const [selected, setSelected]: any = useState([])
  const [horseName, setHorseName] = useState('')
  const [urlPath, setUrlPath] = useState({ url: '', title: '' })

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
    setOpen(true)
    setSelected([
      { key: '出走日', value: d.date },
      { key: '出走時間', value: d.time },
      { key: 'ROUND', value: d.round },
      { key: 'レース名', value: d.title },
      { key: '対象', value: d.target },
      { key: '距離', value: d.distance },
      { key: '成績', value: d.score },
      { key: '賞金', value: d.prize.join(',') },
      { key: 'ユーザー名', value: d.user },
      { key: '開催地', value: d.place },
    ])
    setHorseName(d.horse)
    setUrlPath({ url: d.url, title: 'レースページに移動' })
  }

  return api.isLoading ? (
    <Spinner text={currentLoading} />
  ) : api.race.tbody?.length ? (
    <>
      <ClickableTableData
        header={api.race.header}
        tbody={api.race.tbody}
        meta={api.race.matchedMeta}
        callback={(d: any) => callback(d)}
      ></ClickableTableData>
      <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
        title={horseName}
      >
        <SimpleTableDataV tbody={selected} url={urlPath} />
      </SimpleDialog>
    </>
  ) : (
    <Box>出走予定なし</Box>
  )
}
