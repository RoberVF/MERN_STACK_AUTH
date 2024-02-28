import React from 'react'
import { useTasks } from '../context/TasksContext'
import {Link} from 'react-router-dom'

export default function TaskCard({ task }) {

    const { deleteTask } = useTasks()
    return (
        <div className="bg-zinc-800 p-4 mt-4 h-auto max-w-full md:p-10 md:mt-0 rounded-md">
            <h1 className='text-xl md:text-2xl font-bold'>{task.title}</h1>
            <p className='text-slate-300'>{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
            <div className="flex gap-x-2 items-center ">
                <Link to={`/tasks/${task._id}`}>Edit</Link>
                <button onClick= {() => {
                    deleteTask(task._id)
                }}>Delete</button>
            </div>
        </div>
    )
}
