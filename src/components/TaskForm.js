import React, { useState } from 'react'

export default function Taskform(props) {
    const { Title = "title", Description = "description", status = "pending", Priority = "P0", assignee = "assignee name" } = props;
    const [title, setTitle] = useState(Title);
    const [description, setDescription] = useState(Description);
    const [taskStatus, setTaskStatus] = React.useState(status);
    const [priority, setPriority] = React.useState(Priority);
    const [assigneeName, setAssigneeName] = useState(assignee);

    const handleUpdateSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <form className='new-task-form' onSubmit={handleUpdateSubmit}>
                <div className="input-box">
                    <label htmlFor="task-title">task-title</label>
                    <input type="text" name='task-title' className="task-title" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="input-box">
                    <label htmlFor="task-description">task-description</label>
                    <input type="text" name='task-description' className="task-description" onChange={e => setDescription(e.target.value)} value={description} required />
                </div>
                
                <div className="task-status input-box">
                    <label htmlFor="status" className="status" value={taskStatus} onChange={e => setTaskStatus(e.target.value)} >Status</label>
                    <select name="status" id="" className="status-option" >
                        <option value="pending">pending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                        <option value="deployed">deployed</option>
                        <option value="deferred">deferred</option>
                    </select>
                </div>

                <div className="input-box">
                    <label htmlFor="assignee-name">assignee</label>
                    <input  type="text" name='assignee-name' className="assignee-name" value={assigneeName} onChange={e => setAssigneeName(e.target.value)} required />
                </div>

                <div className="task-priority input-box">
                    <label htmlFor="priority" className="priority">Priority</label>
                    <select name="priority" id="" className="priority-option" value={priority} onChange={e => setPriority(e => e.target.value)} >
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                    </select>
                </div>

                <button>create Task</button>
            </form>
        </>
    )
}
