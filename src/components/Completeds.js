import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Completeds() {
  const { tasks } = useTasks();
  
  return (
    <div className='completed-tasks-container tasks-container-statuswise'>
      <h1>Completed</h1>
      {
        tasks?.map((task , index) => task.taskStatus === "completed" && <TaskCard key={index} task={task} />)
      }
    </div>
  )
}
