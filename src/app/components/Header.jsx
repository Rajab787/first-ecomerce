"use client"
import React, { useEffect, useRef, useState } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ProductData from '../components/Data/ProductData.json';
import LargeMenuMen from './LargeMenuMen';
import LargeMenuWomen from "./LargeMenuWomen";

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const favItems = useSelector((state) => state.favourites?.items ?? []);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // scroll disable
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // scroll enable
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [open]);

  const handleClickCart = () => {
    router.push("/cart");
  };
  const handleClickFav = () => {
    router.push("/favourites");
  };
  const handleSearch = () => {
    const query = input.trim().toLowerCase();
    const validRoutes = ProductData.BannerData.categories;

    if (!query) {
      alert("Please enter a search query");
      return;
    }

    if (query === "home") {
      router.push("/");
    } else if (validRoutes.includes(query)) {
      router.push(`/${query}`);
    } else {
      alert("No section found for this search");
    }

    setInput("");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8FEFE] shadow-sm z-50">
      <div className="lg:w-[80%] w-[90%] md:w-[90%] m-auto lg:px-6 py-4 flex justify-between items-center ">

        {/* Logo */}
        <h1 className="text-[#139695] md:text-3xl font-extrabold lg:text-4xl">Footwear</h1>

        {/* Nav Links */}
        <div className="w-[20%] md:w-[50%] lg:w-[20%] ml-12">
          <nav className="hidden lg:flex gap-8 lg:text-[16px] font-semibold text-gray-700 uppercase tracking-wide">
            {ProductData.BannerData.categories?.map((item, index) => {
              const isRestricted = ["Home", "About", "Cart"].includes(item.tag);

              return (
                <div key={index} className="relative group">
                  <Link
                    href={item.link}
                    className={`${pathname === item.link
                      ? "text-teal-600"
                      : "hover:text-teal-500"
                      }`}
                  >
                    {item.tag}
                  </Link>

                  {/* Large Menus based on condition */}
                  {!isRestricted && (
                    <div className="absolute hidden group-hover:block top-full left-0">
                      {item.tag === "Men" && <LargeMenuMen />}
                      {item.tag === "Women" && <LargeMenuWomen />}
                    </div>
                  )}
                </div>
              );
            })}

          </nav>
        </div>

        {/* Search + Icons */}
        <div className="flex justify-end w-[30%]">
          {/* Search Bar */}
          <div className="lg:flex mx-6 hidden">
            <div className="relative w-[100%] max-w-md">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search products..."
                className="w-[100%] rounded-full border border-gray-200 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Search
                onClick={handleSearch}
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Favourites */}
            <div className="relative cursor-pointer" onClick={handleClickFav}>
              <Heart size={20} className="text-gray-700 hover:text-teal-500" />
              {favItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {favItems.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer" onClick={handleClickCart}>
              <ShoppingCart size={20} className="text-gray-700 hover:text-teal-500" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Desktop Dropdown */}

            <div>


              {/* Mobile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex flex-col justify-between w-6 h-5 lg:hidden focus:outline-none"
                >
                  <span className="block h-0.5 bg-[#595959]"></span>
                  <span className="block h-0.5 bg-[#595959]"></span>
                  <span className="block h-0.5 bg-[#595959]"></span>
                </button>

                {open && (
                  <div
                    className={`absolute right-0 w-44 bg-white shadow-xl lg:hidden rounded-xl py-3 z-50 
                      transform transition-all duration-300 ease-out
                      ${open ? "opacity-100 scale-100 translate-y-1" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                  >
                    <div className="flex flex-col gap-3 px-3">
                      {ProductData.BannerData.categories?.map((item, index) => (
                        <Link
                          href={item.link}
                          key={index}
                          className={`text-gray-800 font-medium text-sm uppercase tracking-wide py-2 px-2 rounded  
                          ${pathname === item.link
                              ? "bg-[#139695] text-white"
                              : "hover:bg-teal-50 hover:text-teal-500"
                            }`}
                        >
                          {item.tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
