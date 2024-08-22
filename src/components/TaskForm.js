import React, { useState } from 'react'

export default function Taskform({ task,  cancelForm , handleTask}) {
    const [title, setTitle] = useState(task?.title || "task title");
    const [description, setDescription] = useState(task?.description || "task description");
    const [startDate , setStartDate] = useState();
    const [endDate , setEndDate] = useState(task?.endDate || new Date());
    const [taskStatus, setTaskStatus] = React.useState(task?.taskStatus || "pending");
    const [priority, setPriority] = React.useState(task?.priority || "P0");
    const [assigneeName, setAssigneeName] = useState(task?.assigneeName || "task assignee name");

    console.log("handleTask" , handleTask);
    
    
    const handleFormSubmit = e => {
        e.preventDefault();
        setTitle(title.trim());
        setDescription(description.trim());
        setAssigneeName(assigneeName.trim());

        if(!title || !description || !assigneeName)  {
            alert("Some fields are empty!");
        } else {
            handleTask({title , description , taskStatus , priority , assigneeName , startDate:new Date(startDate), endDate:new Date(endDate)});
            cancelForm(0);
        }
    }

    return (
        <div className='h-[100vh] w-full z-50 fixed top-0 left-0 flex items-center justify-center bg-gray-950/60'>
            <div className='new-task-form bg-white'>
                <h2 className="text-2xl font-bold text-center py-2">Enter New Task Details</h2>
                <div className="input-box">
                    <label htmlFor="task-title">Title</label>
                    <input type="text" name='task-title' className="task-input" placeholder='Enter the title' value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="input-box">
                    <label htmlFor="task-description">Description</label>
                    <textarea type="text" name="task-description"  className="task-input" id="" cols="30" rows="6" placeholder='Enter description' onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                </div>
                
                <div className="task-status input-box">
                    <label htmlFor="status" className="status">Status</label>
                    <select name="status" id="" className="status-option"  placeholder='pending' value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} >
                        <option value="pending">pending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                        <option value="deployed">deployed</option>
                        <option value="deferred">deferred</option>
                    </select>
                </div>
                
                <div className="input-box">
                        <label htmlFor="end-date">Start-date</label>
                        <input type="date" name='end-date' className="task-input"  placeholder='Enter expected end date' onChange={e => setStartDate(e.target.value)} value={startDate} required />
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
                    <button onClick={() => cancelForm(0)} className='cancel'>cancel</button>
                    <button onClick={handleFormSubmit}>create Task</button>
                </div>
            </div>
        </div>
    )
}
