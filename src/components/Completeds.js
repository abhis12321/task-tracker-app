import React from 'react'
import TaskCard from './TaskCard'

export default function Completeds(props) {
  return (
    <div className='completed-tasks-container'>
      <h1>Completed</h1>
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task}/>
        })
      }
    </div>
  )
}
