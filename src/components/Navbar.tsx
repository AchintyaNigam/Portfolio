'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import LogoImage from '../../public/Logo.png';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row items-center w-screen bg-gradient-to-r from-sky-600 to-sky-800   text-white pl-8 shadow-black drop-shadow-2xl'>
      <Link href='/'><div className='p-0 bg-black rounded-full w-14 h-14 items-center justify-center m-2 image-button overflow-hidden'>
        <Image src={LogoImage} alt='logo' width={80} height={80}/>
      </div></Link>
      <div className='flex flex-row space-x-8 text-cyan-100 p-4 font-bold'>
        <div className='text-button'>MUSIC</div>
        <div className='text-button' onClick={() => router.push('/coding')}>CODING</div>
        <div className='text-button'>LITERATURE</div>
      </div>
    </div>
  );
}

export default Navbar;
