"use client"
import React from 'react'
import { MenData } from './MenData'
import { ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart, openCart } from '../Redux/Slices/CartSlice'

const Men = () => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addToCart(item));
        dispatch(openCart());
    }
    return (
        <div>
            <div>
                <div className='bg-[#88C8BC] lg:mt-22 mt-27 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
                    <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
                </div>
                <div className='max-w-[2000px]   m-auto pb-10'>
                    <h2 className='text-4xl text-center my-5 lg:my-12 font-semibold font-serif'>{MenData.heading}</h2>
                    <div className='w-[90%]  m-auto flex flex-wrap justify-center gap-7'>
                        {MenData.Men.map((item, index) => (
                            <div key={index} className='lg:w-[20%] border-1 text-center md:w-[40%]   border-[#DEE2E6]'>
                                <div className='relative group'>
                                    <img src={item.img} className='object-cover transition duration-400' />
                                    <button
                                        onClick={() => handleClick(item)}
                                         className="w-[40%] h-[13%]  bottom-2 left-1/2 -translate-x-1/2 rounded-3xl cursor-pointer absolute  bg-black items-center gap-2 bottom- hidden lg:flex justify-center opacity-0 group-hover:opacity-100 hover:bg-[#88C8BC] hover:text-black transition duration-500  text-white font-serif  "
                                    >
                                        <ShoppingCart size={20} />Add to Cart
                                    </button>
                                </div>
                                <h4 className='my-4 font-serif text-[19px]'>{item.productName}</h4>
                                <p className='mb-4 font-serif font-semibold text-[19px]'>${item.price}</p>
                                <div className='mb-4 font-sans w-[70%] m-auto'>
                                    <p className=''>{item.description}</p>
                                </div>
                                <div className='w-[40%] md:w-[50%] bg-[#88C8BC] py-3 lg:hidden rounded-xl m-auto justify-between  px-3 flex my-7 shadow' >
                                    <ShoppingCart size={20} />
                                    <button onClick={() => handleClick(item)}>Add to Cart     </button>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className='flex justify-center py-6 lg:py-12'>
                        
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Men