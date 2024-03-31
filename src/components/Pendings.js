import React from 'react'
import TaskCard from './TaskCard'

export default function Pendings({tasks , handleUpdate}) {
  // const [m , setM] = React.useState();
  const handleDelete = (index) => {
    let task = [...tasks];
    task.splice(index, 1);
    handleUpdate(task);
  }

  React.useEffect(() => {
  } , [tasks]);
  
  return (
    <div className='pending-tasks-container tasks-container-statuswise'>
      <h1>Pending</h1>
      {
        tasks?.map((task , index) => {
          return <TaskCard key={index} task={task} handleDelete={e => handleDelete(index)} />
        })
      }
    </div>
  )
}
