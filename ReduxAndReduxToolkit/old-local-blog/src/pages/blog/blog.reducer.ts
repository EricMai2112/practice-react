import { createAction, createReducer, current, nanoid, PayloadAction } from '@reduxjs/toolkit'
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

export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
  return {
    payload: {
      ...post,
      id: nanoid()
    }
  }
})

export const deletePost = createAction<string>('blog/deletePost')

export const startEditingPost = createAction<string>('blog/startEditingPost')

export const cancelEditingPost = createAction('blog/cancelEditingPost')

export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id == postId)
      if (foundPostIndex != -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id == postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id == postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
})

// const blogReducer = createReducer(initialState, {
//   [addPost.type]: (state, action: PayloadAction<Post>) => {
//     const post = action.payload
//     state.postList.push(post)
//   },
//   [deletePost.type]: (state, action: PayloadAction<Post>) => {
//     const postId = action.payload
//     const foundPostIndex = state.postList.findIndex((post) => post.id == postId)
//     if (foundPostIndex != -1) {
//       state.postList.splice(foundPostIndex, 1)
//     }
//   },
//   [startEditingPost.type]: (state, action: PayloadAction<Post>) => {
//     const postId = action.payload
//     const foundPost = state.postList.find((post) => post.id == postId) || null
//     state.editingPost = foundPost
//   },
//   [cancelEditingPost.type]: (state) => {
//     state.editingPost = null
//   },
//   finishEditingPost: (state, action: PayloadAction<Post>) => {
//     const postId = action.payload.id
//     state.postList.some((post, index) => {
//       if (post.id == postId) {
//         state.postList[index] = action.payload
//         return true
//       }
//       return false
//     })
//     state.editingPost = null
//   }
// })

export default blogReducer
