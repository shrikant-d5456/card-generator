import React, { useState } from 'react'
import img from '../Assets/img2.jpg'

const Card2 = ({info}) => {

  return (
    <>
    <div className=' lg:w-10/12 w-full m-auto  z-10'>
      <div className="relative overflow-hidden flex w-full lg:h-[80vh] md:h-[27vh]  m-auto md:text-base text-sm">
            
            <div className=' md:w-[500px] w-[250px] h-full '>
                <img 
                className=' w-full h-full object-fill'
                src={img} alt="" />
            </div>
            <div className="w-2/3 h-full flex-col gap-10 items-center bg-gradient-to-r from-[#fe007b] to-yellow-500 justify-center shadowcss">

                <div className=' md:w-[150px] w-10 md:h-[150px] m-auto md:my-4 my-2 rounded-full '>
                    <img
                        className=' w-full h-full object-fill rounded-full'
                        src="https://th.bing.com/th/id/OIP._0CjqBvlIsz50fECLsdBJwHaHa?w=626&h=626&rs=1&pid=ImgDetMain" alt="" />
                </div>

                <div className="text-center ">
                    <h1
                        className=' uppercase font-bold md:text-2xl md:my-4'>
                        || {info.heading} ||
                    </h1>
                    <p
                        className=' md:w-10/12 w-full m-auto font-semibold md:text-xl text-[10px]  my-2'>
                        {info.desc}
                    </p>
                </div>

                <div className=' w-fit relative md:py-2 px-4 m-auto border-2 border-white border-dashed md:my-10 my-4'>
                    <span className='absolute md:top-[-29px] top-[-20px] left-1 font-semibold md:text-2xl '>{info.month}</span>
                    <p className=' font-semibold  md:text-2xl'>{info.dates}</p>
                </div>

                <div className='grid grid-cols-3 md:text-lg '>
                    <div >
                        <p className=' md:text-2xl font-semibold'>Address</p>
                        <p className='md:text-base text-[10px]'>{info.address}</p>
                    </div>
                    <div>
                        <p className=' md:text-2xl font-semibold'>Regards</p> 
                        <p className='md:text-base text-[10px]'>{info.regards}</p>
                        
                    </div>
                    <div>
                        <p className=' md:text-2xl font-semibold'>Contact</p> 
                        <p className='md:text-base text-[8px]'>{info.contact}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  
    </>
  )
}

export default Card2
