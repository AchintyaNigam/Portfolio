'use client';
import React from 'react';
import { motion } from "motion/react"

import Profile from '@/components/coding/contentComponents/Profile';
import Experience from '@/components/coding/contentComponents/Experience';
const Content = () => {
  return (
    <div className='z-100 bg-transparent h-full lg:w-[70vw] w-screen overflow-x-hidden pt-8 flex flex-col overflow-y-scroll'>
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
      >
      <h1 className='lg:text-8xl text-6xl text-white font-bold p-8 pb-0'>CODING</h1>
      </motion.div> 

      <Profile />
      <Experience />
      <Experience />
      <Experience />

  </div>
  );
}

export default Content;
