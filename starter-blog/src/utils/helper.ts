import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface ErrorFormObject {
  [key: string | number]: string | ErrorFormObject | ErrorFormObject[]
}

interface EntityError {
  status: 422
  data: {
    error: ErrorFormObject
  }
}

//FetchBaseQueryError
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error
}
//SerializedError
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string'
}
//EntityError
export function isEntityError(error: unknown): error is EntityError {
  return (
    isFetchBaseQueryError(error) &&
    error.status === 422 &&
    typeof error.data === 'object' &&
    error.data !== null &&
    !(error.data instanceof Array)
  )
}
