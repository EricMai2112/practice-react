import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'

import styles from './taskInput.module.scss'

interface TaskInput {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishedEditTodo: () => void
}

export default function TaskInput(props: TaskInput) {
  const { addTodo, currentTodo, editTodo, finishedEditTodo } = props
  const [name, setName] = useState<string>('')

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

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list Typescript</h1>
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

TaskInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishedEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOf(
    [
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.boolean
      })
    ],
    null
  )
}
