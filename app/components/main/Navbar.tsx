'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/NavLogo.png"
                        alt='logo'
                        width={50}
                        height={50}
                        className='cursor-pointer hover:animate-slowspin md:w-[70px] md:h-[70px]'
                    />
                    <span className='font-bold ml-[8px] hidden md:block text-gray-300'>
                        constGenius
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className='hidden md:flex w-auto lg:w-[500px] h-full flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer'>About me</a>
                        <a href='#skills' className='cursor-pointer'>Skills</a>
                        <a href='#projects' className='cursor-pointer'>Projects</a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-gray-200 p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Social Icons - Centered on Mobile */}
                <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-3 md:gap-5 md:static md:transform-none'>
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={20}
                            height={20}
                            className='md:w-[24px] md:h-[24px]'
                        />
                    ))}
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className='absolute top-[65px] left-0 w-full bg-[#0300145e] backdrop-blur-md md:hidden'>
                        <div className='flex flex-col items-center py-4 border-t border-[#7042f861] gap-5'>
                            <a href='#about-me' className='cursor-pointer text-gray-200 tracking-[5px] text-center'>
                                About me
                            </a>
                            <a href='#skills' className='cursor-pointer text-gray-200 tracking-[5px] text-center'>
                                Skills
                            </a>
                            <a href='#projects' className='cursor-pointer text-gray-200 tracking-[5px] text-center'>
                                Projects
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar