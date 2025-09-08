import { createAction, createReducer, createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'
import PostList from './components/PostList'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

// export const addPost = createAction<Post>('blog/addPost')

// export const deletePost = createAction<String>('blog/deletePost')

// export const startEditingPost = createAction<String>('blog/startEditingPost')

// export const cancelEditingPost = createAction('blog/cancelEditingPost')

// export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const post = action.payload
      state.postList.push(post)
    },
    deletePost: (state, action: PayloadAction<String>) => {
      const deletePostId = action.payload
      const foundIndexPost = state.postList.findIndex((post) => post.id == deletePostId)
      if (foundIndexPost != -1) {
        state.postList.splice(foundIndexPost, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<String>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id == postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state, action: PayloadAction<String>) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id == postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {
          console.log(current(state))
        }
      )
      .addDefaultCase((state, action) => {
        console.log(state)
      })
  }
})

// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       const post = action.payload
//       state.postList.push(post)
//     })
//     .addCase(deletePost, (state, action) => {
//       const deletePostId = action.payload
//       const foundIndexPost = state.postList.findIndex((post) => post.id == deletePostId)
//       if (foundIndexPost != -1) {
//         state.postList.splice(foundIndexPost, 1)
//       }
//     })
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id == postId) || null
//       state.editingPost = foundPost
//     })
//     .addCase(cancelEditingPost, (state, action) => {
//       state.editingPost = null
//     })
//     .addCase(finishEditingPost, (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id == postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       state.editingPost = null
//     })
// })

export const { deletePost, startEditingPost, finishEditingPost, cancelEditingPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
