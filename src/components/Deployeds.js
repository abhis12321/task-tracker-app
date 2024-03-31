import React from 'react'
import TaskCard from './TaskCard'

export default function Deployeds(props) {
  return (
    <div className='deployed-tasks-container'>
      <h1>Deployed</h1>
      
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task}/>
        })
      }
    </div>
  )
}
