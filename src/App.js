import React , {useState} from 'react';
import TaskForm from './components/TaskForm';
import './App.css'
import TaskCard from './components/TaskCard';
import Pendings from './components/Pendings';
import Progressings from './components/Progressings';
import Completeds from './components/Completeds';
import Deployeds from './components/Deployeds';
import Deferreds from './components/Deferreds';

let t1 = [
  {
    title:"Login Page",
    description:"a full stack student login web page",
    taskStatus:"pending",
    priority:"P1",
    assigneeName:"Tom Morphy"
  }
]

export default function App() {
  const [pendings , setPendings] = useState(t1);
  const [inProgress , setInProgress] = useState();
  const [completeds , setCompleteds] = useState();
  const [deployeds , setDeployeds] = useState();
  const [deferreds , setDeferreds] = useState();


  return (
    <div className='task-tracker-container'>
      <h1 className="task-tracker-heading">Task Tracker App</h1>
      <TaskForm />
      <TaskCard />

      <Pendings tasks={pendings} />
      <Progressings tasks={inProgress}  />
      <Completeds tasks={completeds}  />
      <Deployeds tasks={deployeds} />
      <Deferreds tasks={deferreds} />
    </div>
  )
}
