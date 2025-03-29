import React from 'react'

const UserInfoCard = ({userDataList,onEdit ,onDelete}) => {
    const {first_name,last_name,email,avatar} = userDataList;
  return (
    <div className='p-4 flex justify-between  border rounded shadow item-center'>
        <div className='flex space-x-4 items-center'>
        
        <img src={avatar} alt='avatar' className='rounded h-32 w-32' />
        <div >
            <p className='font-bold'>
                {first_name} {last_name}
            </p>
            <p className='text-gray-500 text-sm '>{email}</p>
        </div>
        </div>
        <div className='flex  flex-col justify-between '>
            <button onClick={onEdit} className='text-white px-3 py-2 rounded transition-transform duration-200 active:scale-90 hover:bg-blue-400 cursor-pointer bg-blue-500'>
                Edit
            </button>

            <button onClick={onDelete} className='text-white px-3 py-2 transition-transform duration-200 active:scale-90 hover:bg-red-400 cursor-pointer rounded bg-red-500'>
                Delete
            </button>

        </div>
    </div>
  )
}

export default UserInfoCard