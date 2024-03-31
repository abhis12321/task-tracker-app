import React from 'react'
import TaskCard from './TaskCard'

export default function Deferreds(props) {
  return (
    <div className='deferred-tasks-container'>
      <h1>Deferred</h1>
      
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task}/>
        })
      }
    </div>
  )
}
