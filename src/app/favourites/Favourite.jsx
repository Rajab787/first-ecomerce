"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, openCart } from '../Redux/Slices/CartSlice'
import { addToFavourite, removeFromFavourite } from '../Redux/Slices/FavouriteSlice'
import { Heart, ShoppingCart } from 'lucide-react';

const Favourite = () => {
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(openCart());
  };

  const toggleFavourite = (item) => {
    const isFav = favourites.some((fav) => fav.id === item.id);
    if (isFav) {
      dispatch(removeFromFavourite(item.id));
    } else {
      dispatch(addToFavourite(item));
    }
  };

  return (
    <div>
      <div className="max-w-[2000px] m-auto py-10">
        <div className='bg-[#139695] lg:mt-12 mt-10 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
          <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
        </div>
        <div className="w-[90%] m-auto">

          {favourites.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-serif py-20">
              Your liked items will be shown here ❤️
            </div>
          ) : (
            <div className='mt-10 lg:mt-12'>
              <h2 className='text-3xl text-center my-5 lg:my-12 font-semibold font-serif'>You Wish List</h2>

              <div className="flex flex-wrap justify-center gap-7">
                {favourites?.map((item) => (
                  <div
                    key={item.id}
                    className="relative shadow-2xl  group lg:w-[20%] md:w-[40%] border-1 text-center border-[#DEE2E6]"
                  >
                    <div className="relative group">
                      <img
                        src={item.img}
                        alt={item.productName}
                        className="object-cover transition duration-400"
                      />

                      {/* ❤️ Heart */}
                      <div className="absolute top-2 right-2 ">
                        <button onClick={() => toggleFavourite(item)}>
                          <Heart
                            size={28}
                            className={`transition-colors duration-300 ${favourites.some((fav) => fav.id === item.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-500"
                              }`}
                          />
                        </button>
                      </div>

                      <button
                        onClick={() => handleClick(item)}
                        className="w-[40%] h-[13%] bottom-2 left-1/2 -translate-x-1/2 rounded-3xl cursor-pointer absolute bg-black items-center gap-2 hidden lg:flex justify-center opacity-0 group-hover:opacity-100 hover:bg-[#88C8BC] hover:text-black transition duration-500 text-white font-serif"
                      >
                        <ShoppingCart size={20} /> Add to Cart
                      </button>
                    </div>

                    <h4 className="my-4 font-serif text-[19px]">{item.productName}</h4>
                    <p className="mb-4 font-serif font-semibold text-[19px]">${item.price}</p>
                    <div className="mb-4 font-sans w-[70%] m-auto">
                      <p>{item.description}</p>
                    </div>

                    <div className="w-[40%] md:w-[50%] bg-[#88C8BC] py-3 lg:hidden rounded-xl m-auto justify-between px-3 flex my-7 shadow">
                      <ShoppingCart size={20} />
                      <button onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center lg:flex-row w-full  lg:w-[80%] mt-12 m-auto gap-6 px-4">

          {/* Brands Section */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">Brands</h2>
            <ul className="space-y-3">
              {["Nike", "Adidas", "Marrel", "Gucci", "Sketcher"].map((brand, index) => (
                <li
                  key={index}
                  className="text-gray-700 cursor-pointer hover:text-[#159998] transition"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Size Section */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">Size / Width</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {["7", "7.5", "8", "8.5", "9", "9.5", "10", "11", "11.5", "12", "12.5", "13", "13.5", "14"].map((size, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 cursor-pointer hover:bg-[#159998] hover:text-white transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Color Section */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">Colors</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Blue", "Black", "Brown", "Red", "Green", "White", "Gray", "Cream"].map((color, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 cursor-pointer hover:bg-[#159998] hover:text-white transition"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Favourite
