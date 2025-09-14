import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#442332] text-white relative z-[999]'>
            <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-40 py-10'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8'>
                    {/* Brand Section */}
                    <div className='lg:col-span-2 space-y-4'>
                        <div className='mb-4'>
                            <Image
                                src='/images/WIE ACT 4.0.png'
                                alt='WIE ACT Logo'
                                width={80}
                                height={40}
                                className='grayscale'
                            />
                        </div>
                        <p className='text-white/90 text-sm leading-relaxed max-w-2xl'>
                            The Women in Engineering Annual Congress of Tunisia (WIE ACT) is an inspiring event 
                            that brings together creative minds from engineering, technology, and development. Our 
                            objective is to support women in engineering through providing an environment for 
                            information sharing, networking, and professional development.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className='space-y-4'>
                        <h3 className='font-bold text-xl md:text-2xl uppercase text-white mb-4'>
                            Quick Links
                        </h3>
                        <nav>
                            <ul className='space-y-3'>
                                <li>
                                    <Link 
                                        href='/' 
                                        className='text-white/80 hover:text-white transition-colors duration-200 text-sm'
                                        aria-label='Go to homepage'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href='/about-us' 
                                        className='text-white/80 hover:text-white transition-colors duration-200 text-sm'
                                        aria-label='Learn more about us'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href='/#news-section' 
                                        className='text-white/80 hover:text-white transition-colors duration-200 text-sm'
                                        aria-label='View latest news'
                                    >
                                        Latest News
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href='/#speakers-section' 
                                        className='text-white/80 hover:text-white transition-colors duration-200 text-sm'
                                        aria-label='View our speakers'
                                    >
                                        Speakers
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href='/#teams-section' 
                                        className='text-white/80 hover:text-white transition-colors duration-200 text-sm'
                                        aria-label='Meet our team'
                                    >
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-white/20 pt-6'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
                        {/* Copyright Section */}
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[#de8aa5] text-xs sm:text-sm'>
                            <span>© 2025, All Rights Reserved</span>
                            <div className='hidden sm:block bg-[#de8aa5] h-1.5 w-1.5 rounded-full' />
                            <span>Powered By IEEE WIE ENIT</span>
                            <div className='hidden sm:block bg-[#de8aa5] h-1.5 w-1.5 rounded-full' />
                            <span className='uppercase font-bold'>
                                Women in Engineering Annual Congress of Tunisia
                            </span>
                        </div>

                        {/* Social Media Links */}
                        <div className='flex items-center gap-4'>
                            <span className='text-white/60 text-sm hidden sm:inline'>Follow us:</span>
                            <div className='flex gap-3'>
                                <Link
                                    href='https://www.facebook.com/profile.php?id=100084776743566/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-white/80 hover:text-white hover:scale-110 transition-all duration-200'
                                    aria-label='Follow us on Facebook'
                                >
                                    <FaFacebook size={24} />
                                </Link>
                                <Link
                                    href='https://www.instagram.com/wie.act/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-white/80 hover:text-white hover:scale-110 transition-all duration-200'
                                    aria-label='Follow us on Instagram'
                                >
                                    <InstagramLogoIcon width={24} height={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;