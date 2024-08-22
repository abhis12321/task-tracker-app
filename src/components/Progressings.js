import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Progressings() {
  const { tasks } = useTasks();
  
  return (
    <div className='in_progressing-tasks-container tasks-container-statuswise'>
      <h1>In-progress</h1>
      
      {
        tasks?.map((task , index) => task.taskStatus === "in-progress" && <TaskCard key={index} task={task} />)
      }
    </div>
  )
}
