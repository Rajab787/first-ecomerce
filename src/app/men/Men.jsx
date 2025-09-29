"use client"
import React, { useEffect, useState } from 'react'
import { Heart, ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, openCart } from '../Redux/Slices/CartSlice'
import { addToFavourite, removeFromFavourite } from '../Redux/Slices/FavouriteSlice'
import ProductDetail from '../components/ProductDetail'
import ProductData from '../components/Data/ProductData.json';

const Men = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const favourites = useSelector((state) => state.favourites.items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = "hidden";   
        } else {
            document.body.style.overflow = "auto";    
        }

      
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [selectedProduct]);


    const handleClick = (item) => {
        dispatch(addToCart(item));
        dispatch(openCart());
    }
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
            <div>
                <div className='bg-[#139695] lg:mt-17 mt-20 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
                    <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
                </div>
                <div className='max-w-[2000px]   m-auto pb-10'>
                    <h2 className='text-2xl lg:text-3xl text-center my-5 lg:my-12 font-semibold font-serif'>{ProductData.MenData.heading}</h2>
                    <div className='w-[90%]  m-auto flex flex-wrap justify-center gap-7'>
                        {ProductData.MenData.Men?.map((item, index) => (
                           <div onClick={() => setSelectedProduct(item)} key={index} className='cursor-pointer relative overflow-hidden shadow-2xl group lg:w-[20%] md:w-[40%] border-1 text-center  border-[#DEE2E6]'>
                                                      <div className='relative group'>
                                                          <img src={item.img} className=' object-cover transform transition-transform duration-500 group-hover:scale-105' />
                                                          {(item.isNew || item.discount) && (
                                                              <div className="absolute top-3 left-3 flex gap-2">
                                                                  {item.isNew && (
                                                                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                                          NEW
                                                                      </span>
                                                                  )}
                                                                  {item.discount && (
                                                                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                                          {item.discount}
                                                                      </span>
                                                                  )}
                                                              </div>
                                                          )}
                          
                                                          <div className="absolute top-2 right-2 ">
                                                              <button onClick={(e) => { e.stopPropagation(); toggleFavourite(item) }}>
                                                                  <Heart
                                                                      size={28}
                                                                      className={`transition-colors cursor-pointer duration-300 ${favourites.some((fav) => fav.id === item.id)
                                                                          ? "fill-red-500 text-red-500"
                                                                          : "text-gray-500"
                                                                          }`}
                                                                  />
                                                              </button>
                                                          </div>
                          
                          
                                                          <button
                                                              onClick={(e) => { e.stopPropagation(); handleClick(item) }}
                          
                                                              className="w-[90%] h-[11%]  bottom-2 left-1/2 -translate-x-1/2 rounded-[10px] cursor-pointer absolute  bg-[#159998] items-center gap-2 bottom- hidden lg:flex justify-center opacity-0 group-hover:opacity-100 hover:bg-[#0d7c7c] hover:text-black transition duration-500  text-white font-serif  "
                                                          >
                                                              <ShoppingCart size={20} />   Add to Cart
                                                          </button>
                                                      </div>
                                                      <h4 className='lg:my-4 my-2 font-serif text-[19px]'>{item.productName}</h4>
                                                      <div className="mb-2  flex items-center justify-center gap-2">
                                                          <span className="text-lg font-bold text-gray-900">${item.price}</span>
                                                          {item.oldPrice &&
                                                              <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>
                                                          }
                                                      </div>
                                                      <div className='lg:mb-4 mb-2 font-sans w-[70%] m-auto'>
                                                          <p className=''>{item.description}</p>
                          
                                                      </div>
                                                      <div className='w-[40%] md:w-[50%] bg-[#88C8BC] py-3 lg:hidden rounded-xl m-auto justify-between  px-3 flex my-3 lg:my-7 shadow' >
                                                          <ShoppingCart size={20} />
                                                          <button onClick={(e) => { e.stopPropagation(); handleClick(item) }}>Add to Cart</button>
                                                      </div>
                                                  </div>

                        ))}

                    </div>
                   

                </div>


            </div>
            {selectedProduct && (
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

        </div>

    )
}

export default Men