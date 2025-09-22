"use client"
import React, { useState } from 'react'
import { Search, ShoppingCart } from "lucide-react";
import { BannerData } from './Banner/BannerData';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from 'react-redux';

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("")
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    const query = input.trim().toLowerCase();

    if (query === "men") {
      router.push("/men");
    }
    else if (query === "women") {
      router.push("/women");
    }
    else if (query === "cart") {
      router.push("/cart");
    }
    else if (query === "home") {
      router.push("/");
    }
    else if (query === "about") {
      router.push("/about");
    }

    else {
      alert("No section found for this search");
    }

    setInput("");
  };

  return (
    <div className="pt-10  text-white lg:pt-15   ">
      <div className='max-w-[2000px]  m-auto '>
        {/* Header */}
        <div className='lg:pb-5 bg-white flex  fixed z-50 w-full top-0   justify-start md:block '>
          <header className='lg:w-[65%] w-[90%] lg:mt-4 m-auto  pt-4 flex flex-col lg:flex-row justify-between mb-3 lg:mb-7'>
            <div className='flex justify-between  lg:block'>
              <h1 className='text-[#595959]  font-bold mb-5 lg:mb-0 text-4xl'>Footwear</h1>
              <button
                onClick={() => setOpen(!open)}
                className="flex flex-col mt-3 justify-between w-6 h-5 lg:hidden focus:outline-none"
              >
                <span className="block h-0.5 bg-[#595959]"></span>
                <span className="block h-0.5 bg-[#595959]"></span>
                <span className="block h-0.5 bg-[#595959]"></span>
              </button>
            </div>

            <div className="relative">

              {/* Dropdown Menu */}
              {open && (
                <div
                  className={`absolute right-0 w-44 bg-white shadow-xl lg:hidden rounded-xl py-3 z-50 
      transform transition-all duration-300 ease-out
      ${open ? "opacity-100 scale-100 translate-y-1" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                >
                  <div className="flex flex-col gap-3 px-3">
                    {BannerData.categories?.map((item, index) =>
                      item.project?.map((subitem, subindex) => (
                        <Link
                          href={subitem.link}
                          key={`${index}-${subindex}`}
                          className={`text-gray-800 font-medium text-sm uppercase tracking-wide py-2 px-2 rounded  hover:bg-teal-50 hover:text-teal-500 transition-colors duration-200  ${pathname === subitem.link
                            ? "bg-teal-500 text-white" 
                            : "text-gray-800 hover:bg-teal-50 hover:text-teal-500"
                            } `}
                        >
                          {item.tag}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}

            </div>

            <div className="w-[100%] justify-center lg:justify-end flex">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search"
                className="w-[90%] lg:w-[30%] border border-[#F2F2F2] rounded-l-full py-2 px-4 focus:outline-none placeholder-gray-400 text-black"
              />
              <button onClick={handleSearch} className="bg-[#88C8BC] cursor-pointer  text-white p-2 rounded-r-full flex items-center justify-center">
                <Search size={26} />
              </button>
            </div>
          </header>

          <div className=' w-[65%] m-auto justify-between hidden lg:flex '>
            <div className='flex gap-5'>
              {BannerData.categories?.map((item, index) => (
                item.project?.map((subitem, subindex) => (

                  <Link href={subitem.link} key={`${index}-${subindex}`} className={`text-black cursor-pointer font-serif text-[13px] uppercase tracking-wider hover:text-teal-400  ${pathname === subitem.link 
                              ? "text-teal-500 "  
                              : "text-gray-800 hover:bg-teal-50 "
                            }`}> {item.tag}</Link>
                ))

              ))}</div>
            <div className='flex gap-2 items-center mr-4'>
              <button className='text-black cursor-pointer font-serif text-[13px] uppercase tracking-wider hover:text-teal-400'><ShoppingCart size={20} /></button>
              <button className='text-black  text-[13px] uppercase tracking-wider cursor-pointer hover:text-teal-400'>Cart   [{items.length === 0 ? "0" : items.length}]</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header