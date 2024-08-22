import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Pendings() {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  
  return (
    <div className='tasks-container-statuswise gap-4 pb-4'>
      <h1 className='py-3 text-[2.5rem] font-extrabold font-mono w-[100%] bg-gray-600 text-white text-center'>Pending</h1>
      { 
        tasks?.map((task , index) => task.taskStatus === "pending" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)}/>)
      }
      
    </div>
  )
}
