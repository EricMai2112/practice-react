import React, { useReducer, useState } from 'react'
import reducer, { initialArg } from '../Reducer/reducer'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../Reducer/actions'
export default function Counter() {
  // const [state, setState] = useState<{ age: number }>({ age: 26 })
  const [state, dispatch] = useReducer(reducer, initialArg)

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
  }

  const increaseAge = () => {
    dispatch(increaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <div>
      <button onClick={decreaseAge} style={{ color: 'red' }}>
        Click to decrease
      </button>
      <span>Age: {state.age}</span>
      <button onClick={increaseAge} style={{ color: 'green' }}>
        Click to increase
      </button>

      <button onClick={() => increaseXAge(3)} style={{ color: 'green' }}>
        Click to increase X age
      </button>
    </div>
  )
}
