"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className='bg-slate-400'>
      
      <ul className='flex items-center justify-center gap-5'>
        <li className='text-lg'><Link href="/">Home</Link></li>
        <li className='text-lg'><Link href="/About">About</Link></li>
        <li className='text-lg'><Link href="/Contact">Contact</Link></li>
      </ul>
      <h1 className='block text-center'>{pathName}</h1>
    </div>
  )
}

export default Navbar
