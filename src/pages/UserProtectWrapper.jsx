
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
        if(!token){
            navigate('/')
            
        }else{
            setLoading(false)
        }

        


    },[navigate])

    if(loading){
        return (
            <div>Loading....</div>
        )
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default UserProtectWrapper