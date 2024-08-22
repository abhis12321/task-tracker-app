import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import './App.css'
import Pendings from './components/Pendings';
import Progressings from './components/Progressings';
import Completeds from './components/Completeds';
import Deployeds from './components/Deployeds';
import Deferreds from './components/Deferreds';
import TaskProvider from './components/TaskProvider';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <TaskProvider >
      <div className='task-tracker-container'>
        <h1 className="task-tracker-heading">Task Tracker App</h1>

        {showForm && <TaskForm  hideForm={setShowForm} />}

        <div className="sorting-option">
          <button onClick={e => setShowForm(true)} className='new-task-btn'>Add New Task</button>
          <select name="status" id="" className="status-option new-task-btn" >
            <option value="0">sort-by-start-date</option>
            <option value="1">sort-by-end-date</option>
            <option value="2">sort-priority</option>
          </select>
        </div>
        <div className="status-columns">
          <Pendings />
          <Progressings />
          <Completeds />
          <Deployeds />
          <Deferreds />
        </div>

      </div>
    </TaskProvider>
  )
}
