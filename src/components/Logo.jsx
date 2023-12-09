import React from 'react'
import { Link } from 'react-router-dom'

function Logo({width = '100px'}) {
  return (
    <div>
      <Link to="/" className="flex w-14 items-center">
        <img src="https://clipartcraft.com/images/bird-logo-transparent-3.png" alt="logo" 
        className='bg-transparent'/>
      </Link>
    </div>
  )
}

export default Logo