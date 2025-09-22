"use client"
import { useRouter } from "next/navigation";
import React from 'react'
const Category = () => {
    const router = useRouter()
     const handleClickMen = () => {
    router.push("/men");
  }
   const handleClickWomen = () => {
    router.push("/women");
  }
    return (
        <div>
        <div className='max-w-[2000px]  m-auto flex flex-col md:flex-row justify-center '>
            <div onClick={handleClickMen}  className='cursor-pointer lg:w-[40%] md:w-[50%] p-4 text-center flex flex-col '>
                <img src='Category/men.jpg' className='lg:h-[27rem] md:h-[15rem] md:w-[90%] hover:shadow-2xl transition duration-500 m-auto lg:w-[80%]'/>
                <h2 className='text-2xl lg:text-3xl mt-5 font-serif'>Shop Men's Collection</h2>
            </div>
            <div onClick={handleClickWomen} className='cursor-pointer lg:w-[40%] md:w-[40%] p-4 text-center ' >
                <img src='Category/item-10.jpg' className='lg:h-[27rem] md:h-[15rem] md:w-full   hover:shadow-2xl transition duration-500 m-auto lg:w-[80%]'/>
                <h2 className='text-2xl lg:text-3xl mt-5 font-serif'>Shop Women's Collection</h2>
            </div>
            
        </div>
        </div>
    )
}

export default Category