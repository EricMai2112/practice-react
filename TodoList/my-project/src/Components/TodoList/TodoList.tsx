import React, { useEffect, useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

interface HandleNewTodo {
  (todos: Todo[]): Todo[]
}

const syncReactToLocal = (handleNewTodo: HandleNewTodo) => {
  const todosString = localStorage.getItem('todos')
  const todosObj: Todo[] = JSON.parse(todosString || '[]')
  const newTodoObj = handleNewTodo(todosObj)
  localStorage.setItem('todos', JSON.stringify(newTodoObj))
}

export default function TodoList() {
  const [todos, setTodo] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodo = todos.filter((todo) => todo.done)
  const notDoneTodo = todos.filter((todo) => !todo.done)

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todoString || '[]')
    setTodo(todosObj)
  })

  const addTodo = (name: string) => {
    const handler = (todosObj: Todo[]) => {
      return [...todosObj, todo]
    }
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodo((prev) => [...prev, todo])

    syncReactToLocal(handler)
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
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo
        } else {
          return todo
        }
      })
    }
    setTodo(handler)
    setCurrentTodo(null)

    syncReactToLocal(handler)
  }

  const deleteTodo = (id: string) => {
    // setTodo((prev) => prev.filter((todo) => todo.id !== id))

    if (currentTodo) {
      setCurrentTodo(null)
    }

    const handler = (todoObj: Todo[]) => {
      const findedIndex = todoObj.findIndex((todo) => todo.id === id)
      if (findedIndex > -1) {
        const result = [...todoObj]
        result.splice(findedIndex, 1)
        return result
      }
      return todoObj
    }

    setTodo(handler)

    syncReactToLocal(handler)
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
        <TaskList
          isDone={false}
          todos={notDoneTodo}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          isDone
          todos={doneTodo}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
