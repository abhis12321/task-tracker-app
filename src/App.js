import React from 'react';
import './App.css'
import Pendings from './components/Pendings';
import Progressings from './components/Progressings';
import Completeds from './components/Completeds';
import Deployeds from './components/Deployeds';
import Deferreds from './components/Deferreds';
import TaskProvider from './components/TaskProvider';
import NewTaskAndSorting from './components/NewTaskAndSorting';

export default function App() {
  return (
    <TaskProvider >
      <div className='task-tracker-container'>
        <h1 className="task-tracker-heading">Task Tracker App</h1>
        <NewTaskAndSorting />
        <div className="status-columns gap-4 p-4">
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
