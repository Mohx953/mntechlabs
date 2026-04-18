import React from 'react'
import { ReactTyped } from "react-typed";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Show } from '@clerk/react';

const Landing = () => {
  return (
    
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/* <p className=' text-blue-500 font-bold p-2' >Technology Lab</p> */}
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>MN-Tech Labs.</h1>
            <div className='flex justify-center items-center'>
               <Show when="signed-out"></Show><Show when="signed-in"><p className='md:text-5xl sm:text-4xl text-xl font-bold  py-4'>Home of:</p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['UNIBUDGET', 'WEATHORA','MNT-LIVESCORE', 'MNT-MOVIES']} typeSpeed={100} backSpeed={120} loop/></Show> 
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'></p>
            {/* <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="#cards">Go MNT</a></button> */}
             <div className="flex justify-center">
      <NoiseBackground
        containerClassName="w-[200px] p-2 rounded-full mx-auto"
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}
      >
        <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
          <a href="#cards">Go MNT &rarr;</a>
        </button>
      </NoiseBackground>
    </div>

        </div>
      
    </div>
    
  )
}

export default Landing
