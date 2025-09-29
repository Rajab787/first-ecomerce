// components/MegaMenu.jsx
"use client"
import React, { useState, useRef } from "react";

export default function MegaMenu({
  trigger = "NEW",
  links = [
    "New Arrivals",
    "Sandals Shop",
    "Heels Shoes and Sandals",
    "Trending Hue: Burnt Sugar",
    "Best Sellers",
    "Online Exclusives",
  ],
  promo = {
    title: "THE DAILY DEAL EDIT",
    subtitle: "Day 1",
    captionTitle: "15% Off Select Styles",
    captionDesc: "Explore the deal of the day",
    cta: "Shop Now",
  },
  imageSrc = "Home/img_bg_2.jpg", // replace with your image
}) {
  const [openOnMobile, setOpenOnMobile] = useState(false);


  return (
    // 'group' enables group-hover for the menu on desktop (md+)
    <div className="w-[100%]  relative inline-block text-left group">
  <div
    // show on hover for md+ and on click for small screens
    className={`
      absolute top-[-19]  w-screen   -translate-x-[44.9%]
       m-auto 
      transform md:opacity-0 md:translate-y-2 md:invisible
      md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:visible
      md:group-hover:scale-100
      transition-all duration-200 ease-out 
      z-40 flex justify-center
    `}
    // small-screen (mobile) behaviour
    style={{ pointerEvents: "auto" }}
  >
    {/* For mobile show when openOnMobile true */}
    <div
      className={`bg-[#F8FEFE] h-[21rem] max-w-[2000px] w-[70%] mt-4  border border-gray-100 rounded-md overflow-hidden m-auto
        ${openOnMobile ? "block" : "hidden md:block"}`}
    >
      <div className="px-6 py-6 md:px-8 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: links */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">
            Featured
          </h4>
          <ul className="space-y-3">
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href="/"
                  className="block text-sm md:text-base text-gray-700 hover:text-teal-600"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle column: promo card */}
        <div className="col-span-1 md:col-span-1 flex items-start justify-center">
          <div className="w-full max-w-[220px] md:max-w-none text-center">
            <div className="bg-[#AF5E4E] text-white py-10 px-6 rounded-sm">
              <div className="text-xs tracking-widest">{promo.title}</div>
              <div className="mt-3 text-2xl font-serif">{promo.subtitle}</div>
            </div>

            <div className="mt-4 text-left">
              <h3 className="text-lg md:text-xl font-serif">{promo.captionTitle}</h3>
              <p className="text-sm text-gray-600 mt-2">{promo.captionDesc}</p>
              <a href="/" className="mt-3 inline-block text-sm underline">
                {promo.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Right column: image */}
        <div className="col-span-1 md:col-span-1 flex items-center justify-center">
          <div className="w-full max-w-[220px] md:max-w-none">
            <img
              src={imageSrc}
              alt="promo"
              className="object-cover rounded-sm w-full h-[200px] md:h-[260px]"
            />
            <div className="mt-3">
              <h4 className="text-lg font-serif">Sandals Season Begins</h4>
              <p className="text-sm text-gray-600 mt-1">
                Styles that go from office hours to happy hour
              </p>
              <a href="#" className="mt-2 inline-block text-sm underline">
                Shop New Arrivals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* optional small footer */}
      <div className="border-t border-gray-100 px-6 py-3 text-sm text-gray-500 text-center">
        Free shipping on orders over $75
      </div>
    </div>
  </div>
</div>

  );
}
