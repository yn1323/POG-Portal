import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import selection from 'src/store/selection'
import { isProduction } from 'src/constant'
import api from 'src/store/api'

const reducer = combineReducers({
  selection,
  api,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return isProduction
      ? getDefaultMiddleware({ serializableCheck: false })
      : getDefaultMiddleware({ serializableCheck: false }).concat(logger)
  },
  devTools: isProduction,
})

export default store

// typeで使用
export * from 'src/store/selection'
export * from 'src/store/api'
