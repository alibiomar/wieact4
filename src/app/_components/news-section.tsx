'use client'
import PostCard from '@/components/cards/post-card';
import { events } from '@/constants/events';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const NewsSection = () => {


    return (
        <section
            id='news-section'
            className='relative py-20 px-4 sm:px-6 md:px-16 overflow-hidden'
        >
            {/* Background with subtle gradient */}
            <div className='absolute inset-0 bg-gradient-to-b from-[#f9f0f6] to-[#f0e6f6] z-0'></div>
            
            {/* Decorative elements */}
            <div className='absolute top-20 right-10 w-32 h-32 bg-[#bd0060]/10 rounded-full blur-3xl animate-float'></div>
            <div className='absolute bottom-20 left-10 w-48 h-48 bg-[#6c9727]/10 rounded-full blur-2xl animate-float-delayed'></div>
            
            <div className='relative z-10 max-w-7xl mx-auto'>
                {/* Section header */}
                <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
                    <div className='text-center md:text-left mb-8 md:mb-0'>
                        <h4 className='text-4xl md:text-5xl font-black uppercase text-[#541d36] mb-4'>
                            Latest <span className='text-[#bd0060]'>News</span> & Events
                        </h4>
                        <p className='text-lg text-[#442332]/80 max-w-xl'>
                            Stay updated with the latest happenings, workshops, and conferences from IEEE WIE ACT
                        </p>
                    </div>
                    
                    <Link 
                        className='group flex items-center gap-2 text-md font-medium text-white hover:shadow-lg bg-gradient-to-r from-[#bd0060] to-[#e00070] px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-[#bd0060]/30 hover:shadow-[#bd0060]/50'
                        target='_blank'
                        href='https://www.facebook.com/profile.php?id=100084776743566'
                    >
                        See All
                        <ChevronRight size={20} className='group-hover:translate-x-1 transition-transform' />
                    </Link>
                </div>

            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between gap-10 '>
                {events.slice(-4).map((event, index) => (
                    <PostCard
                    key={index}
                    imageUrl={event.imageUrl}
                    eventName={event.eventName}
                    category={event.category}
                    />
                ))}
                </div>


                {/* View more button for mobile */}
                <div className='mt-12 text-center md:hidden'>
                    <Link 
                        className='inline-flex items-center gap-2 text-md font-medium text-[#bd0060] hover:text-[#a6304f] transition-colors'
                        target='_blank'
                        href='https://www.facebook.com/profile.php?id=100084776743566'
                    >
                        View all events
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
};

export default NewsSection;