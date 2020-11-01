import { createSlice } from '@reduxjs/toolkit'
import { deepcopy } from 'src/helper'

const STATENAME = 'Selection'
const LSNAME = 'POG_PORTAL'
export type SelectionState = {
  pageName: string
  url: string
  selected: boolean
}

export const defaultSelectionState: SelectionState = {
  pageName: '',
  url: '',
  selected: false,
}

const initialState: SelectionState[] = (() => {
  try {
    const d: any = localStorage.getItem(LSNAME) || [
      { ...defaultSelectionState },
    ]
    return JSON.parse(d)
  } catch {
    return [{ ...defaultSelectionState }]
  }
})()

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    update: (_: SelectionState[], { payload }) => {
      // 選択状態
      const t = deepcopy(payload).map((v: SelectionState, i: number) => {
        v.selected = i === 0
        return v
      })
      localStorage.setItem(LSNAME, JSON.stringify(t))
      return [t]
    },
    makeSelected: (state: SelectionState[], { payload }) => {
      const t = deepcopy(state).map((v: SelectionState, i: number) => {
        v.selected = i === payload
        return v
      })
      return t
    },
  },
})

export default State.reducer

export const { makeSelected, update } = State.actions
