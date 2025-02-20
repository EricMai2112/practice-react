import React from 'react'
import styles from './taskList.module.scss'

interface TaskListProps {
  isDone: boolean
}
export default function TaskList(props: TaskListProps) {
  const { isDone } = props
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{isDone ? 'Hoàn Thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.taskItem}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Hoc bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>✏️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
        <div className={styles.taskItem}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Hoc bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>✏️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
