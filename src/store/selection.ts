import { createSlice } from '@reduxjs/toolkit'

const STATENAME = 'Selection'

export type SelectionState = {
  name: string
  url: string
}

const initialState: SelectionState[] = [{ name: 'test', url: 'test' }]
// )

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    update: (_: SelectionState[], { payload }) => [...payload],
  },
})

export default State.reducer

export const { update } = State.actions
