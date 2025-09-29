// components/MegaMenu.jsx
"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MegaMenu({
  trigger = "NEW",
  links = [
    "New Arrivals",
    "Suede Shop",
    "Animal Print",
    "Trending Hue: Burnt Sugar",
    "Best Sellers",
    "Online Exclusives",
  ],
  promo = {
    title: "THE DAILY DEAL EDIT",
    subtitle: "Day 1",
    captionTitle: "25% Off Select Styles",
    captionDesc: "Explore the deal of the day",
    cta: "Shop Now",
  },
  imageSrc = "Home/cover-img-1.jpg",
}) {
  const [openOnMobile, setOpenOnMobile] = useState(false);

  return (
    <div className="w-full relative inline-block text-left group">
      {/* MegaMenu Container */}
      <AnimatePresence>
        {(openOnMobile || true) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`
              absolute top-[-19px] w-screen -translate-x-[39.9%]
              m-auto z-40 flex justify-center
              invisible md:group-hover:visible md:group-hover:opacity-100
            `}
          >
            <div
              className={`bg-[#F8FEFE] h-[21rem] max-w-[2000px]  w-[70%] mt-4  
                border border-gray-100 rounded-md overflow-hidden m-auto shadow-lg
                ${openOnMobile ? "block" : "hidden md:block"}
              `}
            >
              <div className="px-6 py-6 md:px-8 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left column: links */}
                <div>
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
                <div className="flex items-start justify-center">
                  <div className="w-full max-w-[220px] md:max-w-none text-center">
                    <div className="bg-[#B19F8E] text-white py-10 px-6 rounded-sm">
                      <div className="text-xs tracking-widest">{promo.title}</div>
                      <div className="mt-3 text-2xl font-serif">
                        {promo.subtitle}
                      </div>
                    </div>
                    <div className="mt-4 text-left">
                      <h3 className="text-lg md:text-xl font-serif">
                        {promo.captionTitle}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {promo.captionDesc}
                      </p>
                      <a href="/" className="mt-3 inline-block text-sm underline">
                        {promo.cta}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column: image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-[220px] md:max-w-none">
                    <img
                      src={imageSrc}
                      alt="promo"
                      className="object-cover rounded-sm w-full h-[200px] md:h-[260px]"
                    />
                    <div className="mt-3">
                      <h4 className="text-lg font-serif">Boot Season Begins</h4>
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

              {/* Footer */}
              <div className="border-t border-gray-100 px-6 py-3 text-sm text-gray-500 text-center">
                Free shipping on orders over $75
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
