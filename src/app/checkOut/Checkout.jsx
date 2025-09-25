"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [showModal, setShowModal] = useState(false) // modal state

  const { items } = useSelector((state) => state.cart);
  const totalPrice = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  // ✅ Place Order Validation
  const handlePlaceOrder = () => {
    if (!name || !address || !phone || !email) {
      setError("⚠️ Please fill all shipping info before placing the order.");
      return;
    }
    setError(""); // clear error
    setShowModal(true);
  };

  return (
    <div>
      <div className='max-w-[2000px] m-auto'>
        <h2 className='text-3xl text-center mt-29 mb-5 font-semibold'>Check Out</h2>
        <div className='lg:w-[80%] w-[90%] m-auto bg-[#F0F0F0] shadow-xl rounded-2xl  flex flex-col lg:my-12 p-6'>

          {/* Shipping Info */}
          <div className='lg:w-[80%] w-full m-auto lg:mb-20 '>
            <h3 className='lg:text-4xl text-2xl font-semibold mb-4'>Shipping Info</h3>
            <div className='flex flex-col lg:flex-row gap-5'>
              <input value={name} onChange={(e) => setName(e.target.value)} className='lg:w-[30%] md:w-[40%] border rounded px-3 border-gray-700 py-1' type='text' placeholder='Name' />
              <input value={address} onChange={(e) => setAddress(e.target.value)} className='lg:w-[30%] md:w-[40%] border rounded px-3 border-gray-700 py-1' type='text' placeholder='Address' />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className='lg:w-[30%] md:w-[40%] border rounded px-3 border-gray-700 py-1' type='tel' placeholder='Phone' />
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='lg:w-[30%] md:w-[40%] border rounded px-3 border-gray-700 py-1' type='email' placeholder='Email' />
            </div>

            {error && <p className="text-red-600 mt-3">{error}</p>}
          </div>

          {/* Order Summary */}
          {items.length > 0 && (
            <div className='lg:w-[80%] w-full my-5 m-auto'>
              <h3 className='text-2xl'>Order Summary</h3>
              {items.map((item) => (
                <div key={item.id} className='w-full shadow-xl flex items-center justify-between pb-5 my-5 p-3 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    <img src={item.img} alt={item.productName} className="w-16 h-16 object-cover rounded hidden lg:block" />
                    <div>
                      <h4 className='text-[14px] lg:text-lg font-semibold'>{item.productName}</h4>
                      <p className='hidden lg:block'>${item.price} × {item.quantity}</p>
                    </div>
                  </div>
                  <div className='text-[13px]'>${item.price * item.quantity}</div>
                </div>
              ))}

              <div className='w-full flex justify-between items-center'>
                <button
                  onClick={handlePlaceOrder}
                  className="mt-2 px-4 py-2 uppercase bg-black hover:bg-[#88C8BC] transition text-white rounded"
                >
                  Place Order
                </button>
                
                <h3 className="mt-2 text-lg lg:text-xl font-bold">Total: ${totalPrice}</h3>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-semibold mb-3">🎉 Thank you so much for shopping!</h2>
            <p className="text-gray-600 mb-4">We really appreciate you visiting our site.</p>

            <div className="bg-gray-100 p-4 rounded-lg text-left mb-4">
              <p><span className="font-bold">Order Date:</span> {new Date().toLocaleDateString()}</p>
              <p><span className="font-bold">Expected Delivery:</span> {new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString()}</p>
              <p><span className="font-bold">Total Amount:</span> ${totalPrice}</p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-5 py-2 bg-black text-white rounded-lg hover:bg-[#88C8BC] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
