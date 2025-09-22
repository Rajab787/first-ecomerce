"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !address || !phone || !email) {
            setError("⚠️ You should enter credentials");
            return;
        }

        setError("");

        const formData = { name, address, phone, email };
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
    }



    const { items } = useSelector((state) => state.cart);
    const totalPrice = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

    return (
        <div>
            <div className='max-w-[2000px] m-auto'>
                <h2 className='text-3xl text-center mt-29 mb-5 font-semibold'>Check Out</h2>
                <div className='lg:w-[80%] w-[90%] m-auto bg-[#F0F0F0] shadow-xl rounded-2xl  flex flex-col lg:my-12 p-6'>

                    <div className='lg:w-[80%] w-full m-auto lg:mb-20 '>
                        <h3 className='lg:text-4xl text-2xl font-semibold mb-4'>Shipping Info</h3>
                        <div className='flex flex-col lg:flex-row mb-6 gap-5'>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='lg:w-[30%] md:w-[40%] border-1 rounded-sm px-3  border-gray-700 py-1' type='text' placeholder='Name' />
                            <input value={address} onChange={(e) => setAddress(e.target.value)} className='lg:w-[30%] md:w-[40%] border-1 rounded-sm px-3  border-gray-700 py-1' type='text' placeholder='Address' />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='lg:w-[30%] md:w-[40%] border-1 rounded-sm px-3  border-gray-700 py-1' type='tel' placeholder='Phone' />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='lg:w-[30%] md:w-[40%] border-1 rounded-sm px-3  border-gray-700 py-1' type='email' placeholder='Email' />
                        </div>
                        <button onClick={handleSubmit} className="lg:w-[10%]  lg:mt-14 px-2 py-3 rounded-xl lg:rounded-3xl bg-[#222121] font-serif text-white font-light uppercase hover:bg-black  transition">Submit</button>
                        {error && <p className="text-red-600 mt-3">{error}</p>}
                    </div>
                    {items.length >0 && (
                        <div className='lg:w-[80%] w-full my-5 m-auto '>
                            <h3 className='text-2xl '>Order Summary</h3>
                            {items.map((item) => (
                                <div key={item.id} className='lg:w-[100%] w-[100%] m-auto  shadow-xl lg:rounded-4xl  flex  items-center justify-between pb-5 lg:my-12 p-3 mt-3 lg:p-6'>
                                    <div className='lg:w-[50%] w-[30%] flex '>
                                        <img
                                            src={item.img}
                                            alt={item.productName}
                                            className="w-20 h-20 hidden lg:block object-cover rounded"
                                        />

                                        <div className='lg:ml-4'>
                                            <h4 className='lg:text-lg text-[13px] font-semibold'>{item.productName}</h4>
                                            <p className='hidden lg:block'>${item.price} × {item.quantity}</p>
                                        </div>
                                    </div>

                                    <div className='w-[10%]'>
                                        <h4 className=' text-[13px] '>${item.price}</h4>

                                    </div>
                                    <div className='w-[15%]'>
                                        <h4 className='   text-[13px]'>{item.quantity}</h4>

                                    </div>
                                    <div className='w-[15%]'>
                                        <h4 className='  text-[13px]'>${item.price * item.quantity}</h4>

                                    </div>


                                </div>
                            ))}

                            <div className='w-full flex justify-between mr-10'>
                                <button
                                    className="mt-2 px-4 py-2 lg:ml-5 cursor-pointer uppercase bg-black hover:bg-[#88C8BC] transition text-white rounded"
                                >
                                    Place order
                                </button>
                                <h3 className="mt-4 lg:text-xl text-[16px] font-bold">Total: ${totalPrice}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Checkout