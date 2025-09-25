import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

const page = () => {
    return (
        <div>
            <div className='max-w-[2000px]  m-auto '>
                <Header />
                 <div className='bg-[#139695] lg:mt-17 mt-27 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
                    <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto  flex flex-col lg:flex-row justify-center mt-12 items-center lg:my-22'>

                    <div className=' lg:w-[40%] w-[80%] '>
                        <div className="lg:w-[70%] mx-auto aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/MkDf4CJ5hhw"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className='lg:w-[40%] mt-8'>
                        <h2 className='text-[20px] lg:text-3xl  md:text-3xl  font-light  text-gray-900'>Footwear the leading eCommerce Store around the Globe</h2>
                        <p className='mt-4 text-[15px]   text-gray-600 leading-relaxed'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        <p className='mt-4 text-[15px]  text-gray-600 leading-relaxed'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default page