import React from 'react'

import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const Navigate = useNavigate()
  return (
    <div>
        <h1>Where user dey carry me go, I know sabi</h1>
        <button className='btn btn-danger' onClick={()=>Navigate('/', {replace:true})}>Go back to Home</button>
    
    </div>
  )
}

export default NotFound