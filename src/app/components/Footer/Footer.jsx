import React from 'react'
import { FooterData } from './FooterData'

const Footer = () => {
    return (
        <div>
            <div className='max-w-[2000px]  m-auto lg:pb-10'>
                <div className='lg:w-[70%] w-[90%]  my-10 lg:mb-10  m-auto flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[20%] lg:p-6 leading-7 '>
                        <h3 className='mb-1 lg:my-4 font-serif  text-[19px]'>About Footwear</h3>
                        <p className='text-[#595959] lg:text-[18px] text-[14px]'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                    </div>

                    <div className='md:w-[15%]  lg:p-6 leading-7  '>
                        <h3 className='mb-1 lg:my-4 font-serif text-[19px]'>Customer Care</h3>
                        <ul className='font-serif text-[#595959] lg:text-[18px] text-[14px]'>
                            <li>Contact</li>
                            <li>Return/Exchange</li>
                            <li>Giftvocher</li>
                            <li>Special</li>
                            <li>Customer Services</li>
                        </ul>
                    </div>

                    <div className='lg:w-[15%] lg:p-6 leading-7 '>
                        <h3 className='lg:my-4 mb-1 font-serif text-[19px]'>Information</h3>
                        <ul className='font-serif text-[#595959] lg:text-[18px] text-[14px]'>
                            <li>About us</li>
                            <li>Deliver information</li>
                            <li>Privacy Policy</li>
                            <li>Support</li>
                            <li> Order Tracking</li>
                        </ul>
                    </div>

                    <div className='lg:w-[15%] lg:p-6 leading-7'>
                        <h3 className='lg:my-4 mb-1 font-serif text-[19px]'>News</h3>
                        <ul className='font-serif text-[#595959] lg:text-[18px] text-[14px]'>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Exhibitions</li>
                        </ul>

                    </div>

                    <div className='lg:w-[15%]  lg:p-6 leading-7 '>
                        <h3 className='lg:my-4 mb-1 font-serif text-[19px]'>Contact Information</h3>
                        <ul className='font-serif text-[#595959] lg:text-[18px] text-[14px]'>
                            <li>+92 000 000</li>
                            <li>info@yoursite.com</li>
                            <li>yoursite.com</li>
                        </ul>
                    </div>

                </div>
                <div className='lg:w-[80%] w-[90%] m-auto'>
                    <p className='text-[#595959] text-center lg:text-[18px] text-[14px]'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib Demo Images: Unsplash , Pexels.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer