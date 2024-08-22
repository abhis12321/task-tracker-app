import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Completeds() {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  return (
    <div className='tasks-container-statuswise gap-4 pb-4'>
      <h1 className='py-3 text-[2.5rem] font-extrabold font-mono w-[100%] bg-green-700 text-white text-center'>Completed</h1>
      {
        tasks?.map((task , index) => task.taskStatus === "completed" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)} />)
      }
    </div>
  )
}
