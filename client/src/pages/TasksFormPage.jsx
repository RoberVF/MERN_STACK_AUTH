import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function TasksFormPage() {

    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            createTask(data)
        }
        navigate('/tasks')

    })

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <h1 className='text-2xl font-bold mb-2'>Create New Task!</h1>
                <form onSubmit={onSubmit}>
                    <input
                        {...register('title')}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        type="text" placeholder="Title" autoFocus />

                    <textarea
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        {...register('description')} rows="3" placeholder="Description"></textarea>
                    <button
                        className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-2 rounded w-full'>
                        Save</button>
                    <Link to="/tasks">
                        <button
                            className='bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 mt-2 rounded w-full'>
                            Return to tasks</button>

                    </Link>
                </form>

            </div >
        </div>
    )
}

export default TasksFormPage