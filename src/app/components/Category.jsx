"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Category = () => {
    const router = useRouter();
    const handleClickMen = () => {
        router.push("/men");
    };
    const handleClickWomen = () => {
        router.push("/women");
    };

    return (
        <div>
            <div className="max-w-[2000px] mb-3 m-auto flex flex-col md:flex-row justify-center">
                {/* Men's Collection */}
                <div
                    onClick={handleClickMen}
                    className="cursor-pointer lg:w-[40%] md:w-[50%] p-4 text-center flex flex-col group"
                >
                    <div className="relative overflow-hidden lg:h-[27rem] md:h-[15rem] md:w-[90%] lg:w-[80%] m-auto rounded-md">
                        <img
                            src="Category/men.jpg"
                            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 lg:p-8">
                            <div className="text-white">
                                <span className="bg-orange-500 text-white  font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    NEW ARRIVALS
                                </span>
                                <h2 className="text-3xl md:text-2xl font-extrabold leading-tight mb-2">
                                    Fresh Styles <br /> Just Landed
                                </h2>
                                <p className="text-sm md:text-base text-gray-300 mb-6">
                                    Discover the latest additions to our curated collection of
                                    contemporary fashion.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block  bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-gray-100 transition"
                                >
                                    Shop New →
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl lg:text-3xl  mt-5 font-serif">
                        Shop Men's Collection
                    </h2>
                </div>


                {/* Women's Collection */}
                <div
                    onClick={handleClickWomen}
                    className="cursor-pointer lg:w-[40%] md:w-[40%] p-4 text-center group"
                >
                    <div className="relative overflow-hidden lg:h-[27rem] md:h-[15rem] md:w-full lg:w-[80%] m-auto rounded-md">
                        <img
                            src="Category/item-10.jpg"
                            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 lg:p-8">
                            <div className="text-white">
                                <span className="bg-orange-500  text-white  font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    NEW ARRIVALS
                                </span>
                                <h2 className="text-3xl md:text-2xl font-extrabold leading-tight mb-2">
                                    Fresh Styles <br /> Just Landed
                                </h2>
                                <p className="text-sm md:text-base  text-gray-300 mb-6">
                                    Discover the latest additions to our curated collection of
                                    contemporary fashion.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-white  text-black font-medium px-5 py-2 rounded-md hover:bg-gray-100 transition"
                                >
                                    Shop New →
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl  lg:text-3xl mt-5 font-serif">
                        Shop Women's Collection
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default Category;
