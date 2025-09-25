"use client";
import { Heart, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, openCart } from "../Redux/Slices/CartSlice";
import { addToFavourite, removeFromFavourite } from "../Redux/Slices/FavouriteSlice";

const ProductDetail = ({ product, onClose }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [show, setShow] = useState(false);
     const [error, setError] = useState("");
    const favourites = useSelector((state) => state.favourites.items);
    const dispatch = useDispatch();

     const handleClick = (item) => {
    if (!selectedSize || !selectedColor) {
      setError("⚠️ Please select both size and color before adding to cart.");
      return;
    }
    setError(""); // clear error if everything is fine

    dispatch(addToCart({ ...item, size: selectedSize, color: selectedColor }));
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

    const sizes = ["XS", "S", "M", "L", "XL"];
    const colors = ["Black", "White", "Red", "Gray", "Brown"]; 

    useEffect(() => {
        if (product) {
            setTimeout(() => setShow(true), 50);
        }
        return () => setShow(false);
    }, [product]);

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center mt-12 z-50">
            <div
                className={`bg-white p-6 rounded-lg w-[95%] md:w-[80%] shadow-2xl relative flex flex-col lg:flex-row gap-5 lg:gap-12 transform transition-all duration-500 
        ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-10"}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl font-bold text-gray-500"
                >
                    ✕
                </button>

                {/* Product Image */}
                <div className="lg:w-[50%] lg:h-[30rem]">
                    {(product.isNew || product.discount) && (
                        <div className="absolute flex gap-2">
                            {product.isNew && (
                                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    NEW
                                </span>
                            )}
                            {product.discount && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {product.discount}
                                </span>
                            )}
                        </div>
                    )}
                    <img
                        src={product.img}
                        alt={product.productName}
                        className="w-full lg:h-120 h-60 md:h-150 object-cover rounded-lg "
                    />
                </div>

                {/* Product Info */}
                <div className="lg:w-[50%]">
                    <p className="text-sm text-gray-500 text-[12px] uppercase tracking-wide">
                        {product.category}
                    </p>
                    <h2 className="lg:text-2xl text-[16px] font-bold ">{product.productName}</h2>
                    <p className="text-gray-600 text-[14px] my-1 lg:mt-2">{product.detail}</p>

                    <div className="flex items-center gap-4 lg:mt-1 mb-1 lg:mb-4">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-gray-400 line-through">
                                ${product.oldPrice}
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-2 lg:mb-4 text-sm text-gray-700">
                        <p>
                            <span className="font-semibold">Brand:</span> Addidas
                        </p>
                        <p>
                            <span className="font-semibold">Type:</span> {product.category}
                        </p>
                        <p>
                            <span className="font-semibold">Size:</span> {selectedSize || "Not selected"}
                        </p>
                        <p>
                            <span className="font-semibold">Color:</span> {selectedColor || "Not selected"}
                        </p>
                        <p>
                            <span className="font-semibold">Material:</span> Soft
                        </p>
                        <p>
                            <span className="font-semibold">Stock:</span> 12
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span> ⭐ 4.5
                        </p>
                    </div>

                    {/* Size Selection */}
                    <h2 className="font-semibold lg:pl-1 mb-2">Size:</h2>
                    <div className="flex gap-3 lg:pl-1 mb-4">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`border rounded-xl px-3 py-1 font-semibold transition-colors cursor-pointer ${selectedSize === size
                                    ? "bg-gray-500 text-white"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Color Selection */}
                    <h2 className="font-semibold lg:pl-1 mb-2">Color:</h2>
                    <div className="flex gap-3 lg:pl-1 mb-4">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`border rounded-xl px-4 py-3 font-semibold transition-colors cursor-pointer
                                    ${selectedColor === color ? "ring-2 ring-[#159998]" : "ring-0"}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                            />
                        ))}
                    </div>
                     {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                    <div className="flex flex-col md:flex-row gap-4 md:gap-7 pt-3 lg:pt-4 w-full">
                        {/* Add to Cart */}
                        <button
                            onClick={() => handleClick(product)}
                            className="px-3 py-3 w-full md:w-[30%] h-[3rem] rounded-[10px] cursor-pointer bg-[#159998] items-center flex justify-center hover:bg-[#0d7c7c] hover:text-black transition duration-500 text-white font-serif"
                            
                        >
                            <ShoppingCart size={20} className="mr-2" /> Add to Cart
                        </button>

                        {/* Wishlist */}
                        <button
                            className="flex w-full md:w-[30%] h-[3rem] items-center justify-center px-3 py-2 rounded-[10px] border transition"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavourite(product);
                            }}
                        >
                            <Heart
                                size={22}
                                className={`mr-2 transition-colors cursor-pointer duration-300 ${favourites.some((fav) => fav.id === product.id)
                                        ? "fill-red-500 text-red-500"
                                        : "text-gray-500"
                                    }`}
                            />
                            {favourites.some((fav) => fav.id === product.id)
                                ? "Remove Wishlist"
                                : "Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
