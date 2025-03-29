import React from 'react'

const InfoPageControl = ({currentPage , totalPage , onPageChange }) => {
  
  return (
    <div className='px-2 flex  justify-center items-center  mt-6 sm:space-x-4 space-x-2  mb-2'>
      <button onClick={()=>onPageChange(Math.max(currentPage-1 , 1))}
        disabled={currentPage === 1 }
        className='bg-gray-300 rounded transition-transform duration-200 active:scale-90 hover:cursor-pointer disabled:opacity-50 px-4 py-2'>
         Previous 
      </button>

      <span className='px-2 flex items-center '>
        {currentPage} out of {totalPage}
      </span>
      <button onClick={() => onPageChange(Math.min(currentPage+ 1 ,totalPage))}
      disabled = { currentPage ===totalPage}
      className='bg-gray-300 rounded transition-transform duration-200 active:scale-90 hover:cursor-pointer disabled:opacity-45 sm:px-4 px-3 py-2.5 '
      >
        Next
      </button>
    </div>
  )
}

export default InfoPageControl