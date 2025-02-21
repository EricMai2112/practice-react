import React from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskListProps {
  isDone: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}
export default function TaskList(props: TaskListProps) {
  const { isDone, todos, handleDoneTodo, startEditTodo } = props

  const handleChangeCheckbox = (idTodo: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, e.target.checked)
  }

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{isDone ? 'Hoàn Thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.taskItem} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={handleChangeCheckbox(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                ✏️
              </button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
