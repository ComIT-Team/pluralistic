import { configureStore } from '@reduxjs/toolkit'
import oneReducer from './cartSlice'
export const store = configureStore({
  reducer: {oneReducer},
})