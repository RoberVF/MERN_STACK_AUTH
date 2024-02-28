import React from 'react'
import { useTasks } from '../context/TasksContext'
import {Link} from 'react-router-dom'


export default function TaskCard({ task }) {

    const { deleteTask } = useTasks()
    return (
        <div className="bg-zinc-800 p-4 mt-4 h-auto max-w-full md:p-10 md:mt-0 rounded-md">
            <h1 className='text-xl md:text-2xl font-bold'>{task.title}</h1>
            <p className='text-slate-300'>{task.description}</p>
            
            <p className='mt-2'>
                {task.date && new Date(task.date).toLocaleDateString("es", {
                    weekday: "long",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                }).replace(/^\w/, (char) => char.toUpperCase())}
            </p>
            <div className="grid grid-cols-2 gap-x-2 items-center ">

                <Link 
                    to={`/tasks/${task._id}`}
                    className='max-w-full text-center bg-indigo-500 hover:bg-indigo-500 py-2 px-4 mt-2 font-semibold rounded-md'
                    >Edit</Link>
                <button 
                    onClick= {() => {
                        deleteTask(task._id)
                    }}
                    className='max-w-full text-center bg-red-400 hover:bg-red-400 py-2 px-4 mt-2 font-semibold rounded-md'
                >Delete</button>
            </div>
        </div>
    )
}
