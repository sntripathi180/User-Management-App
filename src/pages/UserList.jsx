import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import UserInfoCard from '../component/UserInfoCard'
import EditUserInfoForm from '../component/EditUserInfoForm'
import InfoPageControl from '../component/InfoPageControl'
const UserList = () => {
    const [data,setData] = useState([]);
    const [message,setMessage] = useState('')
    const [presentPage,setPresentPage] = useState(1)
    const [totalPage,setTotalPage] = useState(1)
    const [editUser,setEditUser] = useState('')
    const [loading,setLoading] = useState(false)
    const editUserRef = useRef(null)
    
    const getUserData = async(page=1) =>{
        setLoading(true);
        try{
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users?page=${page}`)
            console.log(res.data)
            setData(res.data.data);
            setTotalPage(res.data.total_pages)
        } 
         catch(e){
                console.log(e);
                setMessage('failed to fetch data')
            }
            finally{
                setLoading(false)
            }
    }


    useEffect(()=>{
        getUserData(presentPage);
    },[presentPage])

    const handelEdit = (user)=>{
        setEditUser(user)
        setMessage('')
        
        setTimeout(()=>{
        editUserRef.current?.scrollIntoView({behaviour: 'smooth' , block: 'start'})
    },300)
    }

    
    const handelUpdate = async (updateUser)=>{
        setData((prev)=> 
        prev.map((user)=> (user.id  === updateUser.id?{...user,...updateUser}: user))) 
        setEditUser(null)
        setMessage(
            'Updating user list .'
        )
        try{
            const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/users/${updateUser.id}`,updateUser)

            if(res.status === 200 || res.status === 201){
             
                setMessage('User successfully updated')
               
            }else{
                throw new Error('Updation failed!!')
            }
            
        }catch(e){
            console.error("Error while updating the user",e)
            setMessage('Failed in updating user , try again')
            getUserData(presentPage);
        }
    }

const handelDelete = async (id)=>{
    const prevData =[...data]
    setData((prev)=>
    prev.filter((user)=>user.id !==id))
    setMessage('Deleting the user')

    try{

        const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/${id}`)
        if(res.status === 200 || res.status === 204){
           
            setMessage('User deleted successfully')
        }else{
            throw new Error('Deleting failed')
        }
    }catch(e){
        console.error('Error while deleting user ',e)
        setMessage('Failed in deleting user, try again ')
        setData(prevData)
    }
}

  return (
    <div>

        <h1 className='mb-4 text-2xl font-bold '>Users</h1>
        {message && <p className='text-green-700  mb-4'>{message}</p>}

{loading ? (<p>Loading users ...Please wait</p>):( <div>
{data.map((currElem) =>(
    <UserInfoCard 
     key={currElem.id} 
    userDataList = {currElem} 
    onEdit={()=>handelEdit(currElem)}
    onDelete={()=>handelDelete(currElem.id)}
    />
))}
</div>)}
       

{editUser && (<div ref={editUserRef}><EditUserInfoForm 
user = {editUser}
onCancel  ={()=>setEditUser(null)}
onSave = {handelUpdate}
/></div>)}

<InfoPageControl
currentPage = {presentPage}
totalPage = {totalPage}
onPageChange = {setPresentPage}
/>

    </div>
  )
}

export default UserList