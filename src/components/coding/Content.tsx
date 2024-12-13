'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"

import MeCoding from '../../../public/MeCoding.jpg'

import Socials from '@/components/Socials';

const Content = () => {
  return (
    <div className='z-100 bg-transparent h-full w-[70vw] pt-8 flex flex-col overflow-scroll'>

      <h1 className='text-8xl text-white font-bold p-8 pb-0'>CODING</h1>
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex flex-row'>
        <div className='pl-8 pt-8 flex basis-1/3'>
          <div className=' rounded-full overflow-hidden w-64 h-64 justify-center items-center m-8 border-4 border-blue-300 shadow-photo-glow'>
            <Image src={MeCoding} width={1000} height={1000} alt='Me Coding' className='object-cover'/>
          </div>
        </div>
        <div className='flex flex-col basis-2/3 text-white p-12 justify-center '>
          <Socials />
          <h1 className='text-7xl font-bold pt-4'>Achintya Nigam</h1>
          <h2 className='pb-4 text-2xl text-gray-400'>Mumbai, India</h2>
          <p className='font-mono text-xl'>I am a full-stack web developer who enjoys building applications from start to finish. 
            I work on both the backend and frontend, creating seamless experiences for users and ensuring the underlying systems run smoothly.
             My work involves developing APIs, managing databases, and implementing responsive interfaces that are easy to use. I focus on writing clean, efficient code and solving problems with practical solutions.</p>
        </div>
      </div>
    </motion.div>
  </div>
  );
}

export default Content;
