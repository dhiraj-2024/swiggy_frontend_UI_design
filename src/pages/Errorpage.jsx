import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export const Errorpage = () => {

   const error= useRouteError();
   console.log(error)

  return (
<div className='flex justify-center flex-col items-center'>
<h1 className='text-[200px] text-[#FF512F] shadow-text'>Oops!</h1>

{error && <p className='font-bold'>{error.data}</p>}
{error && <p className='font-bold text-[#FF512F]'>{error.status}</p>}
<NavLink to="/">
<button className="button" role="button">Go Home</button>
</NavLink>

</div>
  )
}
