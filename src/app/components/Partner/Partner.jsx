import React from 'react'
import ProductData from '../../components/Data/ProductData.json';

const Partner = () => {
  // Get the first partner group safely
  const partnerSection = ProductData?.PartnerData?.[0];

  return (
    <div>
      <div className='max-w-[2000px] md:w-[80%] m-auto lg:py-10'>
        <h2 className='text-3xl lg:text-4xl text-center mb-10 mt-12 lg:mb-20 font-semibold font-serif'>
          {partnerSection?.name}
        </h2>

        <div className='lg:w-[80%] m-auto flex flex-wrap justify-center gap-7'>
          {partnerSection?.partners?.map((item, index) => (
            <div
              key={index}
              className='lg:w-[15%] w-[40%] md:w-[30%] text-center'
            >
              <img src={item.img} alt={item.heading} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partner
