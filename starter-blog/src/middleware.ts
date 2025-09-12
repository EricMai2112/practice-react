import { AnyAction, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { isEntityError } from 'utils/helper'

function isPayLoadErrorMessage(payload: unknown): payload is {
  data: {
    error: string
  }
  status: number
} {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'data' in payload &&
    typeof (payload as any).data?.error === 'string'
  )
}
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
  if (isRejectedWithValue(action)) {
    if (isPayLoadErrorMessage(action.payload)) {
      //Lỗi reject từ server chỉ có message
      toast.warn(action.payload.data.error)
    } else if (!isEntityError(action.payload)) {
      //Lỗi còn lại trừ lỗi 422
      toast.warn(action.error.message)
    }
  }
  return next(action)
}
