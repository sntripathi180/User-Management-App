import React, {  useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const UserLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message, setMessage] = useState('')
     
    
    const navigate =useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            navigate('/userList')
        }
    },[])

    const handelSubmit = async(e) =>{
        e.preventDefault()
        setMessage('')
        const userData = {
            email,
            password
        }

        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`,userData)

        if(response.status === 200){
            console.log('Login successfull ',response.data)
            const data = response.data
            
            localStorage.setItem('token',data.token)
            

            setMessage('Login successful !!! ')
            setTimeout(()=>navigate('/userList'),200)
        }
    }
        catch(error){
            console.error('Login error : ',error)
            setMessage('Invalid email or password . Please recheck the credentials')
            
        }
        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='p-7 flex justify-center items-center min-h-screen bg-[#eeeeee] px-4 '>
        <div className='p-5 border-2 rounded-2xl max-w-sm sm:max-w-md  '>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <h3 className='text-lg font-medium mb-2'>
                    What's your email?
                </h3>
                <input
                required
                className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base'
                
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder = "email@example.com"
                />
                <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
                <input
                required
                className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base'
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='password'
                />
                {message && <p className={`mb-4 ${message.includes('success')?'text-green-500':'text-red-500'}`}>{message}</p>}
                <button type='submit' className='bg-[#111] text-white text-center transition-transform duration-200 active:scale-90 hover:bg-gray-900 cursor-pointer font-semibold mb-2 px-4 py-2 w-full rounded text-lg block'>Login</button>
               
            </form>
        </div>

    </div>
  )
}

export default UserLogin