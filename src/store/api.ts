import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { req } from 'src/helper'

const STATENAME = 'Api'
export type ApiState = {
  [key: string]: any
  top: any
  detail: any
  horse: any
  race: any
}

const initialState: ApiState = {
  top: {},
  detail: {},
  horse: {},
  race: {},
}

export const fetchTotal = createAsyncThunk(
  `${STATENAME}/fetchTotal`,
  async (params: any) => req(`pogTop`, params)
)
export const fetchDetail = createAsyncThunk(
  `${STATENAME}/fetchDetail`,
  async (params: any) => req('/pogEachP', params)
)
export const fetchHorse = createAsyncThunk(
  `${STATENAME}/fetchHorse`,
  async (params: any) => req('/pogHorse', params)
)
export const fetchRace = createAsyncThunk(
  `${STATENAME}/fetchRace`,
  async (params: any) => req('/pogRace', params)
)

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    setTotal: (state, res) => {
      console.log(res)
      return state
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchTotal.pending, (state: ApiState) => {
      state.top = {}
    })
      .addCase(fetchDetail.pending, (state: ApiState) => {
        state.personalDetail = {}
      })
      .addCase(fetchHorse.pending, (state: ApiState) => {
        state.horseData = {}
      })
      .addCase(fetchRace.pending, (state: ApiState) => {
        state.recentRace = {}
      })
      .addCase(fetchTotal.fulfilled, (state: ApiState, { payload }: any) => {
        state.top = { ...payload }
      })
      .addCase(fetchDetail.fulfilled, (state: ApiState, { payload }: any) => {
        state.top = { ...payload }
      })
      .addCase(fetchHorse.fulfilled, (state: ApiState, { payload }: any) => {
        state.top = { ...payload }
      })
      .addCase(fetchRace.fulfilled, (state: ApiState, { payload }: any) => {
        state.top = { ...payload }
      })
  },
})

export default State.reducer
