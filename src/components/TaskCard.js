import React, { useState , useEffect } from 'react'

export default function TaskCard(props) {
    const [title, setTitle] = useState("title");
    const [description, setDescription] = useState("description");
    const [taskStatus, setTaskStatus] = React.useState("task-status");
    const [startDate , setStartDate] = useState();
    const [endDate , setEndDate] = useState();
    const [assigneeName, setAssigneeName] = useState("assignee name");

    useEffect(() => {        
        let { title = "title", description = "description", taskStatus = "pending", priority = "P0", assigneeName = "assignee name" , startDate="dd-mm-yyyy" , endDate="dd-mm-yyyy" } = props?.task ? props.task : {};
        setTitle(title);
        setDescription(description);
        setTaskStatus(taskStatus);
        setAssigneeName(assigneeName);
        setStartDate(startDate);
        setEndDate(endDate);
    } , [props.task]);


    return (
        <>
            <div className="taskCard">
                <div className="task-info">
                    <h3 className="title">{title}</h3>
                    {/* <p className="status">({taskStatus})</p> */}
                </div>

                <p className="description">{description}</p>
                <p className="assignee"><span>___assigned by </span>{assigneeName}</p>
               
                <button className='task-delete' onClick={props.handleDelete}>delete</button>
                <div className="task-info">
                    <p className="status">start-date : <span>{startDate}</span></p>
                    {
                        taskStatus === "completed" &&
                        <p className="status">end-date : <span>{endDate}</span></p>
                    }
                </div>

            </div>
        </>
    )
}
