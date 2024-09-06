import React from 'react';
import img4 from '../Assets/img4.png'

import angleDesign from '../Assets/angledesign.png'

const Card4 = ({info}) => {

    return (
        <>
        <div className='bg-gradient-to-br from-amber-300 via-slate-50 to-amber-300 relative w-[380px] h-[640px] m-auto flex flex-col gap-5 z-20 p-2 text-[#8f6d17] shadow-md border-2 border-double border-[#dca900]'>
            <div className=' absolute w-20 rotate-90 right-1 top-1'><img src={angleDesign} alt="" /></div>  
           
            <div className=' w-full flex justify-center items-center'
            >      
            <img src={img4} 
            className=' rounded-full w-[250px]  ' alt="" />
            </div>
          
            <p> {info.desc} </p>
            <p className=' text-2xl font-bold text-yellow-800 font-sans uppercase'>{info.heading1}</p>
           
            <p>From {info.dates1}</p>
            <div>
                <p className=' uppercase text-sm'>Join us to seek bappas Blessings</p>
                <p>{info.address}</p>
            </div>
           
            <p className=' text-xl font-semibold text-yellow-800'> {info.regards}</p>

            <p>|| ॐ ||</p>
            <div className=' absolute w-20 rotate-[270deg] bottom-1 left-1'><img src={angleDesign} alt="" /></div>
        </div>


            </>
    )
}

export default Card4

