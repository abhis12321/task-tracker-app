import React, { useState } from 'react'

export default function Taskform(props) {
    const { Title = "title", Description = "description", status = "pending", Priority = "P0", assignee = "assignee name" } = props;
    const [title, setTitle] = useState(Title);
    const [description, setDescription] = useState(Description);
    const [startDate , setStartDate] = useState(currentTime());
    const [endDate , setEndDate] = useState(currentTime());
    const [taskStatus, setTaskStatus] = React.useState(status);
    const [priority, setPriority] = React.useState(Priority);
    const [assigneeName, setAssigneeName] = useState(assignee);

    
    const handleUpdateSubmit = e => {
        e.preventDefault();
        const startDate = currentTime();
        props.addNewTask({title , description , taskStatus , priority , assigneeName , startDate:startDate.split('-').reverse().join('-') , endDate});
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
            <form className='new-task-form' onSubmit={handleUpdateSubmit}>
                <h2 className="new-task-heading">Enter Data To Add New Task</h2>
                <div className="input-box">
                    <label htmlFor="task-title">title</label>
                    <input type="text" name='task-title' className="task-input" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="input-box">
                    <label htmlFor="task-description">description</label>
                    <textarea type="text" name="task-description"  className="task-input" id="" cols="30" rows="10"onChange={e => setDescription(e.target.value)} value={description} required ></textarea>
                    {/* <input  name='' className="task-description"  /> */}
                    {/* <input type="text" name='task-description' className="task-description" onChange={e => setDescription(e.target.value)} value={description} required /> */}
                </div>
                

                <div className="input-box">
                    <label htmlFor="start-date">start-date</label>
                    <input type="text" name='start-date' className="task-input" value={startDate} disabled />
                </div>
                
                {
                    (taskStatus === "completed") &&
                    <div className="input-box">
                        <label htmlFor="end-date">end-date</label>
                        <input type="date" name='end-date' className="task-input" onChange={e => setEndDate(e.target.value)} value={endDate} required />
                    </div>
                }
                
                <div className="task-status input-box">
                    <label htmlFor="status" className="status">Status</label>
                    <select name="status" id="" className="status-option"  value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} >
                        <option value="pending">pending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                        <option value="deployed">deployed</option>
                        <option value="deferred">deferred</option>
                    </select>
                </div>

                <div className="input-box">
                    <label htmlFor="assignee-name">assignee</label>
                    <input  type="text" name='assignee-name' className="task-input" value={assigneeName} onChange={e => setAssigneeName(e.target.value)} required />
                </div>

                <div className="task-priority input-box">
                    <label htmlFor="priority" className="priority">Priority</label>
                    <select name="priority" id="" className="priority-option" value={priority} onChange={e => setPriority(e.target.value)}  >
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
