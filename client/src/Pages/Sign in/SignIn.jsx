import { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const signIn = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/auth/signIn", { email, password })
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem("token", data.token)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='signIn'>
            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className=' mb-5'>
                    <h1>Sign In</h1>
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
                            className='border-none p-1 rounded-2 outline-none w-100' placeholder="Email" />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="text"
                            className='border-none p-1 rounded-2 outline-none w-100' placeholder="password" />
                    </div>
                    <button>
                        sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn