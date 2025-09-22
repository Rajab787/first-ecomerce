"use client"
import React from 'react'
import { ProductData } from './ProductData'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, openCart } from '../../Redux/Slices/CartSlice'
import { ShoppingCart } from 'lucide-react'


const Product = () => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addToCart(item));
        dispatch(openCart());
    }

    return (
        <div>
            <div className='max-w-[2000px]   m-auto py-10'>
                <h2 className='text-4xl text-center my-5 lg:my-12  font-semibold font-serif'>{ProductData.heading}</h2>
                <div className='w-[90%]  m-auto flex flex-wrap justify-center gap-7'>
                    {ProductData.products.map((item, index) => (
                        <div key={index} className='relative shadow-2xl group lg:w-[20%] md:w-[40%] border-1 text-center  border-[#DEE2E6]'>
                            <div className='relative group'>
                                <img src={item.img} className='object-cover transition duration-400 group-hover:blur-sm' />
                                <button
                                    onClick={() => handleClick(item)}

                                    className="absolute inset-0  items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition duration-500  text-white font-serif uppercase tracking-wider  bg-black/30"
                                >
                                    <ShoppingCart size={20} /> <br />   Add to Cart
                                </button>
                            </div>
                            <h4 className='my-4 font-serif text-[19px]'>{item.productName}</h4>
                            <p className='mb-4 font-serif font-semibold text-[19px]'>${item.price}</p>
                            <div className='mb-4 font-sans w-[70%] m-auto'>
                                <p className=''>{item.description}</p>
                              
                            </div>
                              <div className='w-[40%] md:w-[50%] bg-[#88C8BC] py-3 lg:hidden rounded-xl m-auto justify-between  px-3 flex my-7 shadow' >
                                    <ShoppingCart size={20} />
                                    <button  onClick={() => handleClick(item)}>Add to Cart     </button>
                                </div>
                        </div>

                    ))}

                </div>
                <div className='flex justify-center pt-9 lg:py-12'>
                    <button className=" lg:mt-6 px-6 py-3 rounded-3xl bg-[#222121] font-serif text-white font-light uppercase hover:bg-black  transition">
                        Shop All Products
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Product