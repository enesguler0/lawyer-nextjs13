"use client"
import Link from 'next/link';
import { useState } from 'react'; 

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar(){
    const[nav, setNav] = useState(true)
    
    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="flex w-full text-3xl font-bold text-[#92400e]">Esas Hukuk</h1>
            
            <ul className='hidden md:flex'>
                <li  className='p-4'>
                    <Link href="/">Anasayfa</Link>
                </li>  
                <li className='p-4'>
                    <Link href="/about">Hakkmızda</Link>
                </li>
                <li className='p-4'>
                    <Link href="/services">Hizmetlerimiz</Link>
                </li>
                <li className='p-4'>
                    <Link href="">Yazılarımız</Link>
                </li>
                <li className='p-4'>
                    <Link href="/contact">İletişim</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': "fixed left-[-100%]"}>
                <h1 className="flex w-full text-3xl font-bold text-[#29e732] m-4">Esas Hukuk</h1>
                <ul className=' uppercase p-4'>
                    <li  className='p-4 border-b border-gray-600'>
                        <Link href="/">Anasayfa</Link>
                    </li>  
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="about">Hakkmızda</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/services">Hizmetlerimiz</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="">Yazılarımız</Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/contact">İletişim</Link>
                    </li>
                </ul>
            </div>


        </div>
    )
}