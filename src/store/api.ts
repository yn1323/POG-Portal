import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { req } from 'src/helper'

const STATENAME = 'Api'
export type ApiState = {
  [key: string]: any
  top: any
  detail: any
  horse: any
  race: any
  raceDetail: any[]
  detailUrl: string
  detailLoadedUrlCnt: number
  isLoading: boolean
}

const defaultState: ApiState = {
  top: {},
  detail: {},
  horse: {},
  race: {},
  raceDetail: [],
  detailUrl: '',
  detailLoadedUrlCnt: 0,
  isLoading: true,
}

const initialState: ApiState = { ...defaultState }

export const fetchTotal = createAsyncThunk(
  `${STATENAME}/fetchTotal`,
  async (params: any) => req(`/pog/top`, params)
)
export const fetchDetail = createAsyncThunk(
  `${STATENAME}/fetchDetail`,
  async (params: any) => req('/pog/person', params)
)
export const fetchHorse = createAsyncThunk(
  `${STATENAME}/fetchHorse`,
  async (params: any) => req('/pog/horse', params)
)
export const fetchRaceUrl = createAsyncThunk(
  `${STATENAME}/fetchRaceUrl`,
  async (params: any) => req('/pog/raceUrl', params)
)
export const fetchRace = createAsyncThunk(
  `${STATENAME}/fetchRace`,
  async (params: any) => req('/pog/race', params)
)

const State = createSlice({
  name: STATENAME,
  initialState,
  reducers: {
    setDetailUrl: (state, { payload }) => {
      return { ...state, detailUrl: payload.url }
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchTotal.pending, () => ({ ...defaultState }))
      .addCase(fetchDetail.pending, () => ({ ...defaultState }))
      .addCase(fetchHorse.pending, () => ({ ...defaultState }))
      .addCase(fetchRaceUrl.pending, () => ({ ...defaultState }))
      .addCase(fetchTotal.fulfilled, (state: ApiState, { payload }: any) => {
        state.top = { ...payload }
        state.isLoading = false
      })
      .addCase(fetchDetail.fulfilled, (state: ApiState, { payload }: any) => {
        state.detail = { ...payload }
        state.isLoading = false
      })
      .addCase(fetchHorse.fulfilled, (state: ApiState, { payload }: any) => {
        state.horse = { ...payload }
        state.isLoading = false
      })
      .addCase(fetchRaceUrl.fulfilled, (state: ApiState, { payload }: any) => {
        state.race = { ...payload }
      })
      .addCase(fetchRace.fulfilled, (state: ApiState, { payload }: any) => {
        state.raceDetail.push({ ...payload })
        state.isLoading = state.race.url.length !== state.raceDetail.length
      })
  },
})
export default State.reducer
export const { setDetailUrl } = State.actions
