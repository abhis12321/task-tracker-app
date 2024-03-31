import React , {useState , useEffect} from 'react';
import TaskForm from './components/TaskForm';
import './App.css'
import Pendings from './components/Pendings';
import Progressings from './components/Progressings';
import Completeds from './components/Completeds';
import Deployeds from './components/Deployeds';
import Deferreds from './components/Deferreds';

let t1 = [
  {
    title:"Login Page",
    description:"a full stack student login web page",
    startDate:"2024-02-31",
    endDate:"2024-03-01",
    taskStatus:"pending",
    priority:"P1",
    assigneeName:"Tom Morphy"
  },
  {
    title:"Login Page",
    description:"a full stack student login web page",
    startDate:"2024-02-31",
    endDate:"2024-03-01",
    taskStatus:"in-progress",
    priority:"P1",
    assigneeName:"Tom Morphy"
  },
  {
    title:"Login Page",
    description:"a full stack student login web page",
    startDate:"2024-02-31",
    endDate:"2024-03-01",
    taskStatus:"completed",
    priority:"P1",
    assigneeName:"Tom Morphy"
  },
  {
    title:"Login Page",
    description:"a full stack student login web page",
    startDate:"2024-02-31",
    endDate:"2024-03-01",
    taskStatus:"deployed",
    priority:"P1",
    assigneeName:"Tom Morphy"
  },
  {
    title:"Login Page",
    description:"a full stack student login web page",
    startDate:"2024-02-31",
    endDate:"2024-03-01",
    taskStatus:"deferred",
    priority:"P1",
    assigneeName:"Tom Morphy"
  },
]

export default function App() {
  const [showForm , setShowForm] = useState(false);
  const [pendings , setPendings] = useState([t1[0]]);
  const [inProgress , setInProgress] = useState([t1[1]]);
  const [completeds , setCompleteds] = useState([t1[2]]);
  const [deployeds , setDeployeds] = useState([t1[3]]);
  const [deferreds , setDeferreds] = useState([t1[4]]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("task-tracking"));
    if(data) {
      setPendings(data.pendings);
      setInProgress(data.inProgress);
      setCompleteds(data.completeds);
      setDeployeds(data.deployeds);
      setDeferreds(data.deferreds);
    }
  } , []);

  useEffect(() => {    
    localStorage.setItem('task-tracking' , JSON.stringify({pendings , inProgress , completeds , deployeds , deferreds}));
  } , [completeds, deferreds, deployeds, inProgress, pendings]);

  const handleNewTask = (task) => {
    setShowForm(false);
    let status = task?.taskStatus;
    switch(status) {
      case "pending":
        setPendings([...pendings , task]);
        break;
      case "in-progress":
        setInProgress([...inProgress , task]);
        break;
      case "completed":
        setCompleteds([...completeds , task]);
        break;
      case "deployed":
        setDeployeds([...deployeds , task]);
        break;
      case "deferred":
        setDeferreds([...deferreds , task]);
        break;
      default:
        break;
    }
  }

  const handleSort = e => {
    const sort = [sortByStartDate , sortByEndDate , sortByPriority];
    sort[e.target.value]();
  }

  const sortByStartDate = () => {
    pendings.sort((a , b) => a.startDate < b.startDate ? -1 : 1);
    inProgress.sort((a , b) => a.startDate < b.startDate ? -1 : 1);
    completeds.sort((a , b) => a.startDate < b.startDate ? -1 : 1);
    deployeds.sort((a , b) => a.startDate < b.startDate ? -1 : 1);
    deferreds.sort((a , b) => a.startDate < b.startDate ? -1 : 1);

    setPendings([...pendings]);
    setInProgress([...inProgress]);
    setCompleteds([...completeds]);
    setDeployeds([...deployeds]);
    setDeferreds([...deferreds]);
  }
  const sortByEndDate = () => {
    pendings.sort((a , b) => a.endDate < b.endDate ? -1 : 1);
    inProgress.sort((a , b) => a.endDate < b.endDate ? -1 : 1);
    completeds.sort((a , b) => a.endDate < b.endDate ? -1 : 1);
    deployeds.sort((a , b) => a.endDate < b.endDate ? -1 : 1);
    deferreds.sort((a , b) => a.endDate < b.endDate ? -1 : 1);

    setPendings([...pendings]);
    setInProgress([...inProgress]);
    setCompleteds([...completeds]);
    setDeployeds([...deployeds]);
    setDeferreds([...deferreds]);
  }
  const sortByPriority = () => {
    pendings.sort((a , b) => a.priority < b.priority ? -1 : 1);
    inProgress.sort((a , b) => a.priority < b.priority ? -1 : 1);
    completeds.sort((a , b) => a.priority < b.priority ? -1 : 1);
    deployeds.sort((a , b) => a.priority < b.priority ? -1 : 1);
    deferreds.sort((a , b) => a.priority < b.priority ? -1 : 1);

    setPendings([...pendings]);
    setInProgress([...inProgress]);
    setCompleteds([...completeds]);
    setDeployeds([...deployeds]);
    setDeferreds([...deferreds]);
  }

  return (
    <div className='task-tracker-container'>
      <h1 className="task-tracker-heading">Task Tracker App</h1>
      {/* <button onClick={e => localStorage.removeItem("task-tracking")}>clear</button> */}
      
      {showForm && <TaskForm addNewTask = {handleNewTask} />}

      <div className="sorting-option">
        <button onClick={e => setShowForm(true)} className='new-task-btn'>Add New Task</button>
        <select name="status" id="" className="status-option new-task-btn" onChange={handleSort} >
            <option value="0">sort-by-start-date</option>
            <option value="1">sort-by-end-date</option>
            <option value="2">sort-priority</option>
        </select>        
      </div>

      <div className="status-columns">
        <Pendings tasks={pendings} handleUpdate={setPendings} />
        <Progressings tasks={inProgress} handleUpdate={setInProgress}  />
        <Completeds tasks={completeds} handleUpdate={setCompleteds}  />
        <Deployeds tasks={deployeds} handleUpdate={setDeployeds} />
        <Deferreds tasks={deferreds} handleUpdate={setDeferreds} />
      </div>
      
    </div>
  )
}
