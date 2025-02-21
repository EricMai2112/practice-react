import React, { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

export default function TodoList() {
  const [todos, setTodo] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodo = todos.filter((todo) => todo.done)
  const notDoneTodo = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodo((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      } else {
        return null
      }
    })
  }

  const finishedEditTodo = () => {
    setTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo
        } else {
          return todo
        }
      })
    })
    setCurrentTodo(null)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          finishedEditTodo={finishedEditTodo}
        />
        <TaskList isDone={false} todos={notDoneTodo} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
        <TaskList isDone todos={doneTodo} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
      </div>
    </div>
  )
}
