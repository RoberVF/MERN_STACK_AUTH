import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username' />
                {errors.username && (
                    <p className='text-red-500'>Username is requires</p>
                )}

                <input type="email" {...register("email", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email' />
                {errors.email && (
                    <p className='text-red-500'>Email is requires</p>
                )}

                <input type="password" {...register("password", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Password' />
                {errors.password && (
                    <p className='text-red-500'>Password is requires</p>
                )}

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage