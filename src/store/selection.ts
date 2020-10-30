import { createSlice } from '@reduxjs/toolkit'

const STATENAME = 'Selection'

export type SelectionState = {
  pageName: string
  url: string
}

export const defaultSelectionState: SelectionState = { pageName: '', url: '' }

const initialState: SelectionState[] = [
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'test' },
  { pageName: 'test', url: 'teskjkjt' },
]

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    update: (_: SelectionState[], { payload }) => [...payload],
  },
})

export default State.reducer

export const { update } = State.actions
