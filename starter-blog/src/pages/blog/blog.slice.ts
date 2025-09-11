import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BlogState {
  postId: String
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<String>) => {
      state.postId = action.payload
    },
    cancelEditPost: (state) => {
      state.postId = ''
    }
  }
})

const blogReducer = blogSlice.reducer
export const { startEditPost, cancelEditPost } = blogSlice.actions
export default blogReducer
