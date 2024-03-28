import { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { DataContext } from '../../context/MainContextState'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user } = DataContext()

    const signIn = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/auth/signIn", { email, password })
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem("token", data.token)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }
    if (user) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='signIn'>
            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className=' mb-5'>
                    <h1 className=' text-white'>Sign In</h1>
                </div>
                <form onSubmit={signIn} className='d-flex flex-column gap-4 '>
                    <div className=' w-100 d-flex flex-column gap-3'>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            autoComplete='email'
                            type="email"
                            className='border-none py-2 px-3 rounded-2 outline-none w-100' placeholder="Email" />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="Password"
                            className='border-none py-2 px-3 rounded-2 outline-none w-100' placeholder="password" />
                    </div>
                    <button className='text-white py-1'>
                        sign in
                    </button>
                    <div className=' text-center text-white'>
                        <h6>You don&#39;t have an account <span><Link to={'/signup'}>sing up</Link></span></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn