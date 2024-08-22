import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Deployeds(props) {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  
  return (
    <div className='tasks-container-statuswise gap-4 pb-4'>
      <h1 className='py-3 text-[2.5rem] font-extrabold font-mono w-[100%] bg-blue-800 text-white text-center'>Deployed</h1>
      
      {
        tasks?.map((task , index) => task.taskStatus === "deployed" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index , task)} />)
      }
    </div>
  )
}
