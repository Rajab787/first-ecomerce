"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../Redux/Slices/CartSlice'
import Link from 'next/link'


const Cart = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);


    return (
        <div>
            <div>
                <div className='bg-[#139695] lg:mt-17 mt-20 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
                    <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
                </div>
                <div className='max-w-[2000px]  w-[90%] m-auto'>

                    <h2 className='lg:text-4xl mt-5 text-2xl text-[#595959] text-center my-1 lg:mt-12 font-semibold font-serif'>Your Cart</h2>

                    <div className='lg:w-[30%] m-auto  flex  items-center justify-between p-6'>

                        <div className='w-20 h-20 border-2 border-gray-400  rounded-full flex items-center justify-center '>
                            <span className="text-gray-700 font-semibold">01</span>
                        </div>

                        <div className='w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center'>
                            <span className="text-gray-700 font-semibold">02</span>
                        </div>
                        <div className='w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center'>
                            <span className="text-gray-700 font-semibold">03</span>
                        </div>
                    </div>


                    <div className='lg:w-[30%] m-auto  flex  items-center justify-between p-6'>

                        <span className='mt-[-32] ml-[-10]'>Shopping Cart</span>
                        <span className='mt-[-32] '>Check out</span>
                        <span className='mt-[-32] '>Order complete </span>

                    </div>


                    <div className='lg:w-[50%] w-[95%] m-auto bg-[#F0F0F0] lg:shadow-xl rounded-xl lg:rounded-4xl py-5  flex  items-center  justify-between mt-5 lg:my-12 p-3 lg:p-6'>
                        <div className='lg:w-[50%] w-[30%]'>
                            <h4 className=' lg:text-[16px] text-[13px] uppercase'>Product Detail</h4>
                        </div>
                        <div className='w-[10%]'>
                            <h4 className='lg:text-[16px] text-[13px] uppercase'>Price</h4>

                        </div>
                        <div className='w-[20%]'>
                            <h4 className='lg:text-[16px] text-[13px] uppercase'>Quantity</h4>

                        </div>
                        <div className='w-[15%]'>
                            <h4 className='lg:text-[16px] text-[13px] uppercase'>Total</h4>

                        </div>
                        <div className='w-[15%]'>
                            <h4 className='lg:text-[16px] text-[13px] uppercase'>Remove</h4>

                        </div>


                    </div>

                    <div className='lg:w-[50%] m-auto '>
                        {items.length === 0 ? (
                            <p className='text-center my-7'>Cart is Empty</p>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className='lg:w-[100%] w-[95%] m-auto  shadow-xl lg:rounded-4xl  flex  items-center justify-between pb-5 lg:my-12 p-3 mt-3 lg:p-6'>
                                    <div className='lg:w-[50%] w-[30%] flex '>
                                        <img
                                            src={item.img}
                                            alt={item.productName}
                                            className="w-20 h-20 hidden lg:block object-cover rounded"
                                        />

                                        <div className='lg:ml-4 '>
                                            <h4 className='lg:text-lg text-[13px] font-semibold'>{item.productName}</h4>
                                            <p className='hidden lg:block'>${item.price} × {item.quantity}</p>
                                             <p className='hidden lg:block'>{item.size}</p>

                                        </div>
                                    </div>

                                    <div className='w-[10%]'>
                                        <h4 className=' text-[13px]'>${item.price}</h4>

                                    </div>
                                    <div className='w-[20%] flex justify-center'>
                                        <h4 className='  '>{item.quantity}</h4>

                                    </div>
                                    <div className='w-[15%]'>
                                        <h4 className=' text-[13px]'>${item.price * item.quantity}</h4>

                                    </div>

                                    <div className='w-[15%]'>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className='text-red-500 cursor-pointer text-[13px] hover:underline'
                                        >
                                            Remove
                                        </button>

                                    </div>
                                </div>
                            ))
                        )}
                        <div className='lg:w-[100%] w-[95%] m-auto mt-10'>
                            {items.length > 0 && (
                                <>
                                    <h3 className="mt-3 lg:ml-4 text-xl font-bold">Total: ${totalPrice}</h3>
                                    <div className='flex justify-between'>
                                        <button
                                            onClick={() => dispatch(clearCart())}
                                            className="mt-2 lg:ml-3 px-4 py-2 cursor-pointer bg-red-500 text-white rounded transition duration-300 transform hover:bg-red-700 hover:scale-105 hover:shadow-lg"
                                        >
                                            Clear Cart
                                        </button>
                                        <Link className='mt-2 lg:mr-3 px-4 py-2 bg-[#88C8BC] text-white rounded  transition duration-300 transform hover:bg-[#5aa499] hover:scale-105 hover:shadow-lg ' href={"/checkOut"}>
                                            Check out
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between mt-12'>
                            <div className=' lg:w-[50%] w-[80%] m-auto'>
                                <input type='number' placeholder='Enter Coupon Number' className="lg:w-[80%] w-full rounded-full border border-gray-200 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                <button className="mt-6 px-6 py-3 lg:w-[50%] w-full  rounded-3xl bg-black font-serif text-white font-light uppercase">Apply Coupon</button>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-md shadow-sm m-auto mt-7 w-80">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Subtotal:</span>
                                    <span className="text-gray-900 font-medium">$200.00</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Delivery:</span>
                                    <span className="text-gray-900 font-medium">$0.00</span>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <span className="text-gray-700">Discount:</span>
                                    <span className="text-gray-900 font-medium">$45.00</span>
                                </div>

                                <hr className="my-2 border-gray-300" />

                                <div className="flex justify-between mt-4">
                                    <span className="text-gray-900 font-semibold">Total:</span>
                                    <span className="text-gray-900 font-bold">${totalPrice}</span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Cart