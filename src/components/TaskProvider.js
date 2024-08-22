import React, { createContext, useContext, useState } from 'react';
import { Tasks } from './Tasks';
const TaskContext = createContext();

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(Tasks);
    
    const sortByStartDate = () => {
        tasks.sort((a, b) => a.startDate < b.startDate ? -1 : 1);
        setTasks(tasks);
    }

    const sortByEndDate = () => {
        tasks.sort((a, b) => a.endDate < b.endDate ? -1 : 1);
        setTasks([...tasks]);
    }

    const sortByPriority = () => {
        tasks.sort((a, b) => a.priority < b.priority ? -1 : 1);
        setTasks([...tasks]);
    }

    const handleNewTask = (task) => {
        setTasks([...tasks , task])
    }

    const handleDeleteTask = (index) => {
        tasks.splice(index , 1);
        setTasks([...tasks]);
    }

    const handleEditTask = (index , task) => {
        tasks[index] = task;
        setTasks([...tasks]);
    }
    

    const value = { tasks, setTasks, sortByEndDate, sortByStartDate, sortByPriority, handleNewTask, handleDeleteTask, handleEditTask };
    
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}


export const useTasks = () => {
    return useContext(TaskContext);
}