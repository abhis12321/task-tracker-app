import React, { useState } from 'react'

export default function Taskform(props) {
    const { Title = '', Description = '', status = "pending", Priority = "P0", assignee = '' } = props;
    const [title, setTitle] = useState(Title);
    const [description, setDescription] = useState(Description);
    const [endDate , setEndDate] = useState(currentTime());
    const [taskStatus, setTaskStatus] = React.useState(status);
    const [priority, setPriority] = React.useState(Priority);
    const [assigneeName, setAssigneeName] = useState(assignee);

    
    const handleUpdateSubmit = e => {
        e.preventDefault();
        const startDate = currentTime();
        setTitle(title.trim());
        setDescription(description.trim());
        setAssigneeName(assigneeName.trim());

        if(!title || !description || !assigneeName)  {
            alert("Some fields are empty!");
        } else {
            props.addNewTask({title , description , taskStatus , priority , assigneeName , startDate:startDate.split('-').reverse().join('-') , endDate});
        }
    }

    function addLeadingZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function currentTime() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1; 
        let day = currentDate.getDate();        
        return addLeadingZero(day) + "-" + addLeadingZero(month) + "-" + year ;
    }
    
    
    return (
        <>
            <div className='new-task-form'>
                <h2 className="new-task-heading">Enter New Task Details</h2>
                <div className="input-box">
                    <label htmlFor="task-title">Title</label>
                    <input type="text" name='task-title' className="task-input" placeholder='Enter the title' value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="input-box">
                    <label htmlFor="task-description">Description</label>
                    <textarea type="text" name="task-description"  className="task-input" id="" cols="30" rows="10" placeholder='Enter description' onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                </div>
                
                <div className="task-status input-box">
                    <label htmlFor="status" className="status">Status</label>
                    <select name="status" id="" className="status-option"  placeholder='pending' value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} >
                        <option value="pending">ending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                        <option value="deployed">deployed</option>
                        <option value="deferred">deferred</option>
                    </select>
                </div>
                
                {
                    (taskStatus === "completed") &&
                    <div className="input-box">
                        <label htmlFor="end-date">End-date</label>
                        <input type="date" name='end-date' className="task-input"  placeholder='Enter expected end date' onChange={e => setEndDate(e.target.value)} value={endDate} required />
                    </div>
                }

                <div className="input-box">
                    <label htmlFor="assignee-name">Assignee</label>
                    <input  type="text" name='assignee-name' className="task-input"  placeholder='Enter assignee name' value={assigneeName} onChange={e => setAssigneeName(e.target.value)} required />
                </div>

                <div className="task-priority input-box">
                    <label htmlFor="priority" className="priority">Priority</label>
                    <select name="priority" id="" className="priority-option"  placeholder='P0' value={priority} onChange={e => setPriority(e.target.value)}  >
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                    </select>
                </div>
                <div className="flex">
                    <button onClick={e => props.hideForm(false)} className='cancel'>cancel</button>
                    <button onClick={handleUpdateSubmit}>create Task</button>
                </div>
            </div>
        </>
    )
}
