import React, { useState , useEffect } from 'react'

export default function TaskCard(props) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [taskStatus, setTaskStatus] = React.useState();
    const [priority, setPriority] = React.useState();
    const [assigneeName, setAssigneeName] = useState();

    useEffect(() => {        
        let { title = "title", description = "description", taskStatus = "pending", priority = "P0", assigneeName = "assignee name" } = props?.task ? props.task : {};
        setTitle(title);
        setDescription(description);
        setTaskStatus(taskStatus);
        setPriority(priority);
        setAssigneeName(assigneeName);
    } , []);

    const handleUpdateSubmit = e => {
        e.preventDefault();
        let task = document.getElementsByClassName('disabled')[0];
        // console.log(task);
        task?.classList?.remove('disabled');
    }

    return (
        <>
            <form className='new-task-form  task-card disabled' onSubmit={handleUpdateSubmit}>
                <div className="input-box">
                    <label htmlFor="task-title">task-title</label>
                    <input type="text" name='task-title' className="task-title" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="input-box">
                    <label htmlFor="task-description">task-description</label>
                    <input type="text" name='task-description' className="task-description" onChange={e => setDescription(e.target.value)} value={description} required />
                </div>
                <div className="input-box">
                    <label htmlFor="start-date">start-date</label>
                    <input name='start-date' className="task-start-date" value='start-date' disabled />
                </div>
                <div className="input-box">
                    <label htmlFor="end-date">end-date</label>
                    <input name='end-date' className="task-end-date" value='end-date' disabled />
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
                <button>Update Task</button>
            </form>
        </>
    )
}
