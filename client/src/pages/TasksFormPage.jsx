import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import { useNavigate } from 'react-router-dom'

function TasksFormPage() {

    const { register, handleSubmit } = useForm()

    const { createTask } = useTasks()

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        createTask(data)
        navigate('/tasks')
    })

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <h1 className='text-2xl font-bold mb-2'>Create New Task!</h1>
                <form onSubmit={onSubmit}>
                    <input {...register('title')}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        type="text" placeholder="Title" autoFocus />

                    <textarea
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        {...register('description')} rows="3" placeholder="Description"></textarea>
                    <button
                        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-2 rounded w-full'>
                        Save</button>
                </form>
            </div >
        </div>
    )
}

export default TasksFormPage