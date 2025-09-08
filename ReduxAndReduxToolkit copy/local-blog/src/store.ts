import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './pages/blog/blog.slice'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

//Lấy rootstate và appdispatch từ store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
