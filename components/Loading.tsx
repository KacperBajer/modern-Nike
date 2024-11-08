import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full flex-1 flex items-center justify-center'>
        <ClipLoader 
            color='#555555'
        />
    </div>
  )
}

export default Loading