import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@material-ui/core'

import { defaultSelectionState, update } from 'src/store/selection'

import { deepcopy } from 'src/helper'

import TextUrl from 'src/component/molecule/TextUrl'
import ButtonAdd from 'src/component/atom/ButtonAdd'
import ButtonOK from 'src/component/atom/ButtonOK'
import TextField from 'src/component/atom/TextField'
import ConfirmConfig from 'src/component/molecule/ConfirmConfig'
import HeaderConfig from 'src/component/molecule/HeaderConfig'

import { SelectionState, State } from 'src/type/state'

export default () => {
  const dispatch = useDispatch()
  const { selection = [] as SelectionState[] } = useSelector(
    (state: State) => state
  )

  const [data, setData] = useState(selection)
  console.log(data)

  const set = (index: number, target: string, val: string) => {
    const t = deepcopy(data)
    t[index][target] = val
    setData(t)
  }

  const save = () => {
    let saveData = data.filter(
      (v: SelectionState) => !(v.pageName === '' || v.url === '')
    )
    if (!saveData.length) {
      saveData = [{ ...defaultSelectionState }]
    }
    dispatch(update(saveData))
    setData(saveData)
  }

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
      {data.map((_: SelectionState, i: number) => (
        <TextUrl key={i} pageName={() => pageName(i)} url={() => url(i)} />
      ))}
      {/* 保存ボタンと重ならないため */}
      <Box mb={5} />
      <ConfirmConfig confirm={() => <ButtonOK setter={save} />} />
    </>
  )
}
