import React, { useState } from 'react'
import ConfirmDeletion from './ConfirmDeletion';
import Taskform from './TaskForm';

export default function TaskCard({ task, handleUpdateTask, handleDeleteTask }) {
    const [operation, setOperation] = useState(0);
    console.log("card" , handleUpdateTask);
    
    
    return (
        <div className="taskCard relative">
            <div className="task-info">
                <h2 className="title">{task.title}</h2>
                <h3 className="priority">{task.priority}</h3>
            </div>
            <hr />
            <p className="description">{task.description}</p>

            <div className="task-info">
                <h3 className="name">@{task.assigneeName}</h3>
            </div>
            <div className="task-info">
                <button className="edit" onClick={() => setOperation(1)}>edit</button>
                <button className='task-delete' onClick={() => setOperation(2)}>delete</button>
            </div>

            {
                operation === 1 ? <Taskform task={task} cancelForm={setOperation} handleTask={handleUpdateTask}/>
                    :
                    operation === 2 && <ConfirmDeletion cancelDeleteTask={() => setOperation(0)} handleDeleteTask={handleDeleteTask} />
            }

        </div>
    )
}
