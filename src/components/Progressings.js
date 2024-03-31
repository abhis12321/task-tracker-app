import React from 'react'
import TaskCard from './TaskCard'

export default function Progressings(props) {
  return (
    <div className='in_progressing-tasks-container'>
      <h1>In-progress</h1>
      
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task}/>
        })
      }
    </div>
  )
}
