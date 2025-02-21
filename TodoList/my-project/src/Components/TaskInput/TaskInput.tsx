import React, { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInput {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInput) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(name)
    setName('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list Typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='caption goes here' value={name} onChange={handleChange} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
