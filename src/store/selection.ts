import { createSlice } from '@reduxjs/toolkit'

const STATENAME = 'Selection'
const LSNAME = 'POG_PORTAL'
export type SelectionState = {
  pageName: string
  url: string
}

export const defaultSelectionState: SelectionState = { pageName: '', url: '' }

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
      localStorage.setItem(LSNAME, JSON.stringify(payload))
      return [...payload]
    },
  },
})

export default State.reducer

export const { update } = State.actions
