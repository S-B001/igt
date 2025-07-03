import { ChevronDown, Crown } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center py-6 px-6 md:px-12 bg-transparent z-20'>
        <div className='flex items-center gap-2' >
            <Crown className='text-black w-6 h-6' />
            <span className='text-xl font-bold text-black'> Landguru </span>
        </div>

        <nav className='hidden md:flex gap-6 text-gray-700 font-medium'>
            <a href='#' className='hover:text-black'>Home</a>
            <a href='#' className='hover:text-black flex items-center gap-1'>Advertise <ChevronDown className='text-black w-5 h-5' /> </a>
            <a href='#' className='hover:text-black flex items-center gap-1'>Supports <ChevronDown className='text-black w-5 h-5' /></a>
            <a href='#' className='hover:text-black'>Contact</a>
        </nav>

         <button  className='bg-[#FCF2E8] text-[#EF9E48] px-4 py-3 rounded font-semibold text-sm hover:bg-orange-200'>
            Try for Free
        </button>
    </header>
  )
}
