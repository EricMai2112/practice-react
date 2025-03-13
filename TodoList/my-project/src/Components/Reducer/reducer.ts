import { ActionType } from './actions'

export const initialArg = { age: 26 }

const reducer = (state: typeof initialArg, action: ActionType) => {
  switch (action.type) {
    case 'increase_age':
      return { ...state, age: state.age + 1 }
    case 'decrease_age':
      return { ...state, age: state.age - 1 }
    case 'increase_xage':
      return { ...state, age: state.age + action.payload }
    default:
      throw Error('Invalid action', action)
  }
}

export default reducer
