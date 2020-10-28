import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import selection from 'src/store/selection'

const reducer = combineReducers({
  selection,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

// typeで使用
export * from 'src/store/selection'
