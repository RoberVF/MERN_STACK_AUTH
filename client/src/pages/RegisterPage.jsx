import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            {
                registerErrors.map((error, i) => (
                    <div className='mt-2 bg-red-500 p-2 text-white rounded-md text-center' key={i}>{error}</div>
                ))
            }
            <h1 className='text-2xl font-bold text-center mb-2'>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className='w-full text-center bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username' />
                {errors.username && (
                    <p className='text-red-500'>Username is required</p>
                )}

                <input type="email" {...register("email", { required: true })}
                    className='w-full text-center bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email' />
                {errors.email && (
                    <p className='text-red-500'>Email is required</p>
                )}

                <input type="password" {...register("password", { required: true })}
                    className='w-full text-center bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Password' />
                {errors.password && (
                    <p className='text-red-500'>Password is required</p>
                )}

                <button type='submit'
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-2 rounded w-full'>Register</button>
            </form>
            <p className='flex mt-3 justify-between'>
                Have an account?
                <Link to='/login' className="text-purple-500 hover:text-purple-700">Login!</Link>
            </p>
            </div>
        </div>
    )
}

export default RegisterPage