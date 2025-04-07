import { createAction, createReducer, current, nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit'
import PostList from './components/PostList'
import { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

// export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
//   return {
//     payload: {
//       ...post,
//       id: nanoid()
//     }
//   }
// })

// export const deletePost = createAction<string>('blog/deletePost')

// export const startEditingPost = createAction<string>('blog/startEditingPost')

// export const cancelEditingPost = createAction('blog/cancelEditingPost')

// export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<String>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id == postId)
      if (foundPostIndex != -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<String>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id == postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
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
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => {
        return {
          payload: {
            ...post,
            id: nanoid()
          }
        }
      }
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
        console.log(current(state))
      })
  }
})

export const { addPost, deletePost, startEditingPost, finishEditingPost, cancelEditingPost } = blogSlice.actions
export const blogReducer = blogSlice.reducer

export default blogReducer
// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       const post = action.payload
//       state.postList.push(post)
//     })
//     .addCase(deletePost, (state, action) => {
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id == postId)
//       if (foundPostIndex != -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//     })
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id == postId) || null
//       state.editingPost = foundPost
//     })
//     .addCase(cancelEditingPost, (state) => {
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
//     .addMatcher(
//       (action) => action.type.includes('cancel'),
//       (state, action) => {
//         console.log(current(state))
//       }
//     )
// })
