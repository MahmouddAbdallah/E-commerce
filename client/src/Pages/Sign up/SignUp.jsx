import { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { DataContext } from '../../context/MainContextState'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user } = DataContext()
    const navigate = useNavigate()
    const signup = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/auth/signup", { name, email, password })
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
        <div className='signup'>
            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className=' mb-5'>
                    <h1 className=' text-white'>Sign Up</h1>
                </div>
                <form onSubmit={signup} className='d-flex flex-column gap-4 '>
                    <div className=' w-100 d-flex flex-column gap-3'>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            className='border-none py-2 px-3 rounded-2 outline-none w-100' placeholder="Name" />
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            className='border-none py-2 px-3 rounded-2 outline-none w-100' placeholder="emial" />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="Password"
                            className='border-none py-2 px-3 rounded-2 outline-none w-100' placeholder="password" />
                    </div>
                    <button className='text-white'>
                        sign up
                    </button>
                    <div className=' text-center text-white'>
                        <h6>you have an account <span><Link to={'/signin'}>sing in</Link></span></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp