import React from 'react'

const Category = () => {
    return (
        <div>
        <div className='max-w-[2000px]  m-auto flex flex-col md:flex-row justify-center '>
            <div className='lg:w-[40%] md:w-[50%] p-4 text-center flex flex-col '>
                <img src='Category/men.jpg' className='lg:h-[27rem] md:h-[15rem] md:w-[90%] shadow-2xl m-auto lg:w-[80%]'/>
                <h2 className='text-2xl lg:text-3xl mt-5 font-serif'>Shop Men's Collection</h2>
            </div>
            <div className='lg:w-[40%] md:w-[40%] p-4 text-center ' >
                <img src='Category/item-10.jpg' className='lg:h-[27rem] md:h-[15rem] md:w-full  shadow-2xl m-auto lg:w-[80%]'/>
                <h2 className='text-2xl lg:text-3xl mt-5 font-serif'>Shop Women's Collection</h2>
            </div>
            
        </div>
        </div>
    )
}

export default Category