import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Deployeds(props) {
  const { tasks } = useTasks();
  
  return (
    <div className='deployed-tasks-container tasks-container-statuswise'>
      <h1>Deployed</h1>
      
      {
        tasks?.map((task , index) => task.taskStatus === "deployed" && <TaskCard key={index} task={task} />)
      }
    </div>
  )
}
