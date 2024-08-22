import React, { useState } from 'react'
import Taskform from './TaskForm';
import { useTasks } from './TaskProvider';

export default function NewTaskAndSorting() {
    const [showForm, setShowForm] = useState(false);
    const { sortByStartDate, sortByEndDate, sortByPriority } = useTasks();
    const handleSort = [sortByStartDate , sortByEndDate , sortByPriority];

    return (
        <>
            {showForm && <Taskform hideForm={setShowForm} />}

            <div className="sorting-option">
                <button onClick={e => setShowForm(true)} className='new-task-btn'>Add New Task</button>
                <select name="status" className="status-option new-task-btn" onChange={e => handleSort[e.target.value]()}>
                    <option value="0" >sort-by-start-date</option>
                    <option value="1" >sort-by-end-date</option>
                    <option value="2" >sort-priority</option>
                </select>
            </div>
        </>
    )
}
