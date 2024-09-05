import React from 'react'
import logo1 from '../Assets/logo1.jpg'
import { BsCalendar4Range } from 'react-icons/bs'
import bgdesign from '../Assets/bgimg.png';
import angleDesign from '../Assets/angledesign.png'

const Card3 = ({info}) => {

    return (
        <>
        <div className=' bg-[#831462] relative w-[380px] h-[640px] m-auto flex flex-col gap-5 z-20 p-2'>
            <div className=' absolute w-20 rotate-90 right-1 top-1'><img src={angleDesign} alt="" /></div>

            <div className=' absolute z-[-1] w-[200px] opacity-60'>
            <img src={bgdesign} alt="" />
         </div>

         <div className=' absolute bottom-1 right-5 z-[-1] w-[200px] opacity-60'>
            <img src={bgdesign} alt="" />
         </div>

            <p className=' mt-6'>You and Yuor Family are invited To..</p>
            <p className=' text-2xl font-bold text-yellow-100 font-sans uppercase'>{info.heading1}</p>
            <p className=' text-xl font-semibold'>Hosted by {info.regards}</p>

            <div
                className=' w-full flex justify-center items-center'
            >      <img src={logo1} className=' rounded-full w-[80px] shadow-[1px_1px_50px_#fbe67e] ' alt="" />
            </div>
            
            <div className=' w-[200px] h-[6vh] flex gap-4 self-center justify-center items-center bg-yellow-100 text-[#ff31c1] font-semibold p-2'>

                <BsCalendar4Range className=' text-2xl' />
                <p>{info.dates1}</p>

            </div>
            <p> {info.desc} </p>
            <div>
                <p className=' font-semibold'>✧✧✧✧✧ Address ✧✧✧✧✧</p>
                <p>{info.address}</p>

            </div>
            <div>
                <p className=' font-semibold'>✧✧✧✧✧ Phone Number ✧✧✧✧✧</p>
                <p className=' text-[14px]'>{info.contact}</p>
                <p className=' text-[14px]'>{info.contact1}</p>
            </div>
            <p>ॐ</p>
            <div className=' absolute w-20 rotate-[270deg] bottom-1 left-1'><img src={angleDesign} alt="" /></div>
        </div>
            </>
    )
}

export default Card3