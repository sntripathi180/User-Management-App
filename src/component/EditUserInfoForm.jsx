import React, { useState } from 'react'

const EditUserInfoForm = ({user, onCancel,onSave}) => {
  const [formData , setFormData] = useState({
    first_name : user.first_name || '',
    last_name : user.last_name || '',
    email : user.email || '',
    id : user.id,
  })

  const handelChange = (e) => {
    setFormData ({
      ...formData , [e.target.name] : e.target.value 
    })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  }
  return (
    <div className='p-4 mt-4 border rounded'>
      <h2 className='font-bold mb-4 text-xl'>Edit User</h2>
      <form onSubmit={handelSubmit} >
        <div className='mb-6'>
          <label className='mb-2 block '>First Name</label>
          <input 
          name='first_name'
          type='text'
          value={formData.first_name}
          required
          onChange={handelChange}
          className='w-full rounded px-3 border'
          />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block '>Last Name</label>
          <input 
          name='last_name'
          type='text'
          value={formData.last_name}
          required
          onChange={handelChange}
          className='w-full rounded px-3 border'
          />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block '>Email</label>
          <input 
          name='email'
          type='email'
          value={formData.email}
          required
          onChange={handelChange}
          className='w-full rounded px-3 border'
          />
        </div>

        <div className='flex  flex-col justify-between '>
          <button type='submit' className='px-4 py-2 rounded text-white bg-green-600 transition-transform duration-200 active:scale-90 hover:bg-green-500 cursor-pointer mb-2'>Save</button>

          <button type='button' onClick={onCancel} className='px-4 py-2 rounded transition-transform duration-200 active:scale-90 hover:bg-gray-500 cursor-pointer text-white bg-gray-400'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditUserInfoForm