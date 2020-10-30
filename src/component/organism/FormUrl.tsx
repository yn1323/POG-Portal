import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

import TextUrl from 'src/component/molecule/TextUrl'
import TextField from 'src/component/atom/TextField'
import ConfirmConfig from 'src/component/molecule/ConfirmConfig'
import HeaderConfig from 'src/component/molecule/HeaderConfig'

import { SelectionState, State } from 'src/type/state'
import ButtonAdd from '../atom/ButtonAdd'
import ButtonOK from '../atom/ButtonOK'
import { Box } from '@material-ui/core'

export default () => {
  const { selection = [] as SelectionState[] } = useSelector(
    (state: State) => state
  )

  const [data, setData] = useState(selection)

  const set = useCallback((index: number, target: string, val: string) => {
    data[index][target] = val
    console.log(data)
    setData([...data])
  }, [])

  const pageName = (index: number) => (
    <TextField
      label="ページ名"
      type="Standard"
      defaultValue={data[index].pageName}
      setter={v => set(index, 'pageName', v)}
    />
  )
  const url = (index: number) => (
    <TextField
      label="URL"
      type="Standard"
      defaultValue={data[index].url}
      setter={v => set(index, 'url', v)}
    />
  )

  return (
    <>
      <HeaderConfig add={() => <ButtonAdd />} />
      {data.map((d: SelectionState, i: number) => (
        <TextUrl key={i} pageName={() => pageName(i)} url={() => url(i)} />
      ))}
      {/* 保存ボタンと重ならないため */}
      <Box mb={5} />
      <ConfirmConfig confirm={() => <ButtonOK />} />
    </>
  )
}
