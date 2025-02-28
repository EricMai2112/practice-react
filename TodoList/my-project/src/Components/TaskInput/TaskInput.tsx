import React, { useCallback, useMemo, useState } from 'react'

// import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'

import styles from './taskInput.module.scss'
import connect, { ExtraInforType } from '../../HOC/connect'
import { debug, log } from '../../HOC/constant'
import Title from '../Title'

interface TaskInputProps extends ExtraInforType {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishedEditTodo: () => void
}

export function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishedEditTodo, debug, log } = props
  const [name, setName] = useState<string>('')

  const address = useMemo(() => {
    return {
      street: 'Aeon Tan Phu'
    }
  }, [name])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      finishedEditTodo()
      setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  const handleClickTitle = useCallback((value: any) => {
    console.log(value)
  }, [])

  return (
    <div className='mb-2'>
      <Title address={address} handleClickTitle={handleClickTitle} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleChange}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}

// TaskInput.propTypes = {
//   addTodo: PropTypes.func.isRequired,
//   editTodo: PropTypes.func.isRequired,
//   finishedEditTodo: PropTypes.func.isRequired,
//   currentTodo: PropTypes.oneOf(
//     [
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         done: PropTypes.boolean
//       })
//     ],
//     null
//   )
// }

export default connect({ debug: debug, log: log })(TaskInput)
