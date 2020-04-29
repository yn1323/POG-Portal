import { createSlice } from '@reduxjs/toolkit'

const STATENAME = 'Selection'

export type SelectionState = {
  url: string
}

export const createSample = (): SelectionState => ({ id: 'sample' })

const initialState: SelectionState = {
  ...empty,
}

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    reset: () => ({ ...empty }),
    update: (state: SelectionState, { payload }) => ({ ...state, ...payload }),
  },
})

export default State.reducer

export const { reset, update } = State.actions
