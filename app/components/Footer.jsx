import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import Image from 'next/image';
import X from '../assets/x-twitter.svg'

const Footer = () => {
  return (
    <div className='flex flex-row p-5 gap-5 items-center justify-between'>
    <div style={{backgroundColor:''}} className=' flex flex-col gap-5'>
        <h1 className='font-bold text-2xl text-gray-800 text-opacity-90 font-major-mono'>DigiVerse</h1>
        <small>Copyright @Digiverse 2024</small>
    </div>
    
    <div className='flex flex-row gap-10'>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" >
        <FaLinkedin size={20} color="black" />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} color="black" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <Image src={X} alt ='fhb' width={20} height ={20} />
        </a>

    </div>
    </div>
  )
}

export default Footer