import React from 'react'

const UserInfoCard = ({userDataList,onEdit ,onDelete}) => {
    const {first_name,last_name,email,avatar} = userDataList;
  return (
    <div className='p-4 flex sm:flex-row flex-col justify-between  border rounded shadow items-center sm:space-x-4 space-x-2 sm:space-y-0 space-y-4 bg-[#eeeeee]'>
        <div className='flex  sm:flex-row  flex-col sm:space-y-0 space-y-4 sm:space-x-4 space-x-2 items-center'>
        
        <img src={avatar} alt='avatar' className='border rounded-full sm:h-32 sm:w-32 h-24 w-24 object-cover ' />
        <div className='sm:text-left text-center'>
            <p className='font-bold '>
                {first_name} {last_name}
            </p>
            <p className='text-gray-500 text-sm '>{email}</p>
        </div>
        </div>
        <div className='flex sm:flex-row  flex-col justify-between w-full sm:w-auto gap-2'>
            <button onClick={onEdit} className='text-white px-3 py-2 rounded transition-transform sm:w-auto w-full  duration-200 active:scale-90 hover:bg-blue-400 cursor-pointer bg-blue-500'>
                Edit
            </button>

            <button onClick={onDelete} className='text-white px-3 py-2 transition-transform  sm:w-auto w-full duration-200 active:scale-90 hover:bg-red-400 cursor-pointer rounded bg-red-500'>
                Delete
            </button>

        </div>
    </div>
  )
}

export default UserInfoCard