import React, { useState , useEffect } from 'react';

export default function TaskCard(props) {
    const [title, setTitle] = useState("title");
    const [description, setDescription] = useState("description");
    const [taskStatus, setTaskStatus] = React.useState("task-status");
    const [showWarning , setShowWrning] = useState(false);
    const [priority, setPriority] = React.useState();
    const [assigneeName, setAssigneeName] = useState("assignee name");

    useEffect(() => {        
        let { title = "title", description = "description", taskStatus = "pending", assigneeName = "assignee name", priority="priority" } = props?.task ? props.task : {};
        setTitle(title);
        setDescription(description);
        setTaskStatus(taskStatus);
        setAssigneeName(assigneeName);
        setPriority(priority);
    } , [props.task]);


    return (
        <>
            <div className="taskCard">
                <div className="task-info">
                    <h2 className="title">{title}</h2>
                    <h3 className="priority">{priority}</h3>
                </div>
                <hr />
                <p className="description">{description}</p>

               <p className="task-info">
                <h3 className="name">@{assigneeName}</h3>
               </p>
                <div className="task-info">
                    <p className="status">{taskStatus === "pending" ? "Assign":taskStatus === "in-progress" ? "In Progress" : taskStatus === "completed" ? "Completed" : taskStatus === "deployed" ? "Deployed" : "Deferred"}</p>
                    <button className='task-delete' onClick={e => setShowWrning(true)}>delete</button>
                    {
                        showWarning &&  
                        <div className="full-body">
                            <div className='delete-cant'>
                                <p>Are you sure , You wanna delete this task</p>
                                <div className="confirm">
                                    <button className='task-delete' onClick={e => {setShowWrning(false) ; props.handleDelete()}}>Yes</button>
                                    <button onClick={e => setShowWrning(false)} className='task-not-delete'>No</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}
