import React from 'react';
import LightningRod from '@/components/coding/LightningRod';

const Experience = () => {
  return (

    <div className='flex flex-col text-white p-10'>
        <h1 className='font-bold lg:text-7xl text-4xl'>Experience</h1>
        <div className='flex flex-row mt-8'>
            <LightningRod />
            <div className='flex flex-col'>
                <div className='flex flex-col p-4 ml-8'>
                    <h1 className='lg:text-5xl text-2xl font-bold'>Junior Software Developer</h1>
                    <h2 className='lg:text-3xl text-xl font-bold'>Xlancr</h2>
                    <h2 className='lg:text-3xl text-xl font-bold'>December, 2024 - March, 2024</h2>
                </div>
                <div className='flex flex-col p-4 ml-8'>
                    <h1 className='lg:text-5xl text-2xl font-bold'>Frontend Developer Intern</h1>
                    <h2 className='lg:text-3xl text-xl font-bold'>Xlancr</h2>
                    <h2 className='lg:text-3xl text-xl font-bold'>August, 2024 - November, 2024</h2>
                </div>
                <div className='flex flex-col p-4 ml-8'>
                    <h1 className='lg:text-5xl text-2xl font-bold'>Software Engineer Intern Trainee</h1>
                    <h2 className='lg:text-3xl text-xl font-bold'>Alumnus Software</h2>
                    <h2 className='lg:text-3xl text-xl font-bold'>January, 2024 - June, 2024</h2>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Experience;
