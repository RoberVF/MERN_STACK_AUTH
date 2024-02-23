import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, errors: signinErrors } = useAuth()

    const onSubmit = handleSubmit((data) => {
        signin(data)
    })
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signinErrors && signinErrors.map((error, i) => (
                        <div className='mt-2 bg-red-500 p-2 text-white rounded-md text-center' key={i}>{error}</div>
                    ))
                }
                <h1 className='text-2xl font-bold text-center mb-2'>Login</h1>
                <form onSubmit={onSubmit}>
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
                        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-2 rounded w-full'>Login</button>
                </form>
                <p className='flex mt-3 justify-between'>
                    Don't have an account? 
                    <Link to="/register" className='text-purple-500 hover:text-purple-700'>Create it!</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage