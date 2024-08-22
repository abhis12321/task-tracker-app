import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Deferreds(props) {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  return (
    <div className='deferred-tasks-container tasks-container-statuswise'>
      <h1>Deferred</h1>
      
      {
        tasks?.map((task , index) => task.taskStatus === "deferred" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)} />)
      }
    </div>
  )
}
