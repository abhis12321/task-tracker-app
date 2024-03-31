import React from 'react'
import TaskCard from './TaskCard'

export default function Progressings(props) {
  const handleDelete = (index) => {
    let tasks = [...props.tasks];
    tasks.splice(index, 1);
    props.handleUpdate(tasks);
  }

  React.useEffect(() => {

  } , [props.tasks]);
  
  
  return (
    <div className='in_progressing-tasks-container tasks-container-statuswise'>
      <h1>In-progress</h1>
      
      {
        props?.tasks?.map((task , index) => {
          return <TaskCard key={index} task={task} handleDelete={e => handleDelete(index)} />
        })
      }
    </div>
  )
}
