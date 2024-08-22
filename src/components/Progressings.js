import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Progressings() {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  return (
    <div className='w-[98%] flex flex-col gap-4 pb-4 bg-white rounded-lg overflow-hidden'>
      <h1 className='py-3 text-[3rem] font-extrabold font-mono w-[100%] bg-yellow-600 text-white text-center'>In-progress</h1>
      
      {
        tasks?.map((task , index) => task.taskStatus === "in-progress" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)}/>)
      }
    </div>
  )
}
