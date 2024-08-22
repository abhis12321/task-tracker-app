import React, { useState } from 'react'
import ConfirmDeletion from './ConfirmDeletion';

export default function TaskCard({ task, handleDeleteTask }) {
    const [deleteTask , setDeleteTask] = useState(false);
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
                <button className="edit">edit</button>
                <button className='task-delete' onClick={() => setDeleteTask(true)}>delete</button>
            </div>

            {deleteTask && <ConfirmDeletion cancelDeleteTask={() => setDeleteTask(false)} handleDeleteTask={handleDeleteTask}/>}
        </div>
    )
}
