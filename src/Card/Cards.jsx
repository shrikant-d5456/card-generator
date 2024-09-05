import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Engine from './Engine'
import card1 from '../Assets/card1.png'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/card3.png'
import card4 from '../Assets/card4.png'

import { BsGithub } from 'react-icons/bs'


const Card = () => {


   const array = [
      {
         link:"/card1",
         cardId:"1",
         img:card1
      },
      {
         link:"/card2",
         cardId:"2",
         img:card2
      },
      {
         link:"/card3",
         cardId:"3",
         img:card3

      },
      {
         link:"/card4",
         cardId:"4",
         img:card4

      },
      
   ]

   const [id, setId] = useState(0);
   return (
      <>
         <div className=' fixed left-1 lg:w-[200px] w-[100px] animate-spin anime z-[-1] '>
            <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-luxury-golden-royal-mandala-arabesque-islamic-pattern-for-wedding-invitation-card-png-image_9003218.png" alt="" />
         </div>

         <div className=' fixed bottom-1 right-1 lg:w-[200px]  w-[100px] animate-spin anime z-[-1] '>
            <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-luxury-golden-royal-mandala-arabesque-islamic-pattern-for-wedding-invitation-card-png-image_9003218.png" alt="" />
         </div>

         <div className=' fixed top-20 right-1 lg:w-[200px] w-[100px] animate-spin anime z-[-1] '>
            <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-luxury-golden-royal-mandala-arabesque-islamic-pattern-for-wedding-invitation-card-png-image_9003218.png" alt="" />
         </div>


         <div className=' fixed bottom-20 left-1 lg:w-[200px]  w-[100px] animate-spin anime z-[-1] '>
            <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-luxury-golden-royal-mandala-arabesque-islamic-pattern-for-wedding-invitation-card-png-image_9003218.png" alt="" />
         </div>

         <div className='w-full z-10' >

            <div className=' w-full flex justify-between items-center text-sm font-mono font-semibold p-2 bg-yellow-100 border-b-2 border-white shadow-sm'>
               <p className='  text-black font-bold'>
                  Happy Ganesh Chaturthi 💞</p>
               <p className=' text-black  text-2xl bg-white rounded-full p-1'><BsGithub /></p>
            </div>

            <p className=' text-yellow-800 font-mono text-sm font-semibold bg-white text-left p-2'>Select Banner ▶</p>
            <div className='w-full flex flex-wrap justify-center items-center gap-2 my-4 rounded-md'>
            {array.map((elem,index)=>(
               <div  key={index} className='lg:w-[600px] w-[400px] hover:border-2 bg-white hover:border-white hover:shadow-md ' title='click me' >
               
                    <Link to={elem.link}>
                    <img
                       className=' w-full h-full'
                       onClick={() => setId(index+1)}
                       src={elem.img} alt=""
                    />
                 </Link>
                
               </div>
               ))}

            </div>

            <marquee
               className=" text-yellow-800 font-mono"
               behavior="smooth" direction="left">New cards comming soon..
            </marquee>
         </div>

         <Routes>
            {array.map((elem,index)=>(
               <Route key={index} path={elem.link} element={<Engine id={id} />} />
            ))} 
         </Routes>



      </>

   )
}

export default Card
