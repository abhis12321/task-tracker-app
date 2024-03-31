import React from 'react'
import TaskCard from './TaskCard'

export default function Pendings(props) {

  console.log(props?.tasks);
  
  return (
    <div className='pending-tasks-container'>
      <h1>Pending</h1>
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task}/>
        })
      }
    </div>
  )
}
