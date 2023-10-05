import { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const signup = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/auth/signup", { name, email, password })
            console.log(data)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='signup'>
            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className=' mb-5'>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={signup} className='d-flex flex-column gap-4 '>
                    <div className=' w-100 d-flex flex-column gap-3'>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            className='border-none p-1 rounded-2 outline-none w-100' placeholder="Name" />
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="text"
                            className='border-none p-1 rounded-2 outline-none w-100' placeholder="emial" />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="text"
                            className='border-none p-1 rounded-2 outline-none w-100' placeholder="password" />
                    </div>
                    <button>
                        sign up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp