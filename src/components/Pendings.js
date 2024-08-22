import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Pendings() {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  
  return (
    <div className='pending-tasks-container tasks-container-statuswise'>
      <h1>Pending</h1>
      {
        tasks?.map((task , index) => task.taskStatus === "pending" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)}/>)
      }
      
    </div>
  )
}
