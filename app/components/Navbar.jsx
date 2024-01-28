import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div  className='pt-5 pb-10 p-5 flex flex-row items-center justify-between overflow-hidden lg:gap-10'>
        <h1 className='font-bold text-3xl text-white text-opacity-90 font-major-mono'>DigiVerse</h1>
        <div className='flex flex-col lg:flex-row'>
        <Link href="" className='text-white hover:underline font-small mr-4 lg:mr-10'>Our packages</Link>
        <Link href="" className='text-white hover:underline font-small mr-4 lg:mr-10'>Case Studies</Link>
        <Link href=""  className='text-white hover:underline font-small mr-4 lg:mr-10'>Join Us</Link>
        <Link href=""  className='text-white hover:underline font-small mr-2 lg:mr-10'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar