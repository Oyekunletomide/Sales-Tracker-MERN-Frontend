import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='mt-10'>
        <Link to='/'>
            <button className='bg-blue-400 rounded-full p-2 text-white font-bold'>Sale Deleted!! Click to Go back Home</button>
        </Link>
    </div>
  )
}

export default Message