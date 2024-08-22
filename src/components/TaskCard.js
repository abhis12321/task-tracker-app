import React from 'react'

export default function TaskCard_02({ task }) {

    return (
        <div className="taskCard">
            <div className="task-info">
                <h2 className="title">{task.title}</h2>
                <h3 className="priority">{task.priority}</h3>
            </div>
            <hr />
            <p className="description">{task.description}</p>

            <p className="task-info">
                <h3 className="name">@{task.assigneeName}</h3>
            </p>
            <div className="task-info">
                <button className="edit">edit</button>
                <button className='task-delete'>delete</button>
            </div>
        </div>
    )
}
