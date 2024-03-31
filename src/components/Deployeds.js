import React from 'react'
import TaskCard from './TaskCard'

export default function Deployeds(props) {
  const handleDelete = (index) => {
    let tasks = [...props.tasks];
    tasks.splice(index, 1);
    props.handleUpdate(tasks);
  }

  React.useEffect(() => {

  } , [props.tasks]);
  
  
  return (
    <div className='deployed-tasks-container tasks-container-statuswise'>
      <h1>Deployed</h1>
      
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task} handleDelete={e => handleDelete(index)} />
        })
      }
    </div>
  )
}
