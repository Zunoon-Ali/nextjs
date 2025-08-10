import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-400'>
      <ul className='flex items-center justify-center gap-5'>
        <li className='text-lg'><Link href="/">Home</Link></li>
        <li className='text-lg'><Link href="/About">About</Link></li>
        <li className='text-lg'><Link href="/Contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
