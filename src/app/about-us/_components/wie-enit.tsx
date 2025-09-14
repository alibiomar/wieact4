import Image from 'next/image';

export default function WieEsprit() {
    return (
        <section className='flex md:flex-row flex-col justify-center items-center gap-12 md:px-40 px-10'>
            <div className='flex-1 flex items-center justify-center relative'>
                {/* Background with brand colors - representing growth and femininity */}
                <div className='absolute inset-0 bg-gradient-to-br from-[#de8aa5]/30 to-[#7b42ce]/30 rounded-full blur-3xl scale-110'></div>
                <div className='relative p-8'>
                    <Image
                        src='/images/wie-logo.png'
                        width={400}
                        height={400}
                        alt='IEEE WIE logo'
                    />
                    
                    {/* Decorative brand elements */}
                </div>
            </div>
            
            <div className='flex flex-col gap-6 flex-1'>
                <div className='flex flex-col gap-4'>
                    <h2 className='md:text-5xl text-4xl font-bold leading-tight font-[AllRoundGothic]'>
                        <span className='bg-[#541d36]  bg-clip-text text-transparent'>
                            IEEE ENIT WIE
                        </span>
                        <br />
                        <span className='text-[#7b42ce]'>Student Affinity Group</span>
                    </h2>
                    
                </div>
                
                <div className='space-y-6'>
                    <p className='md:text-lg font-[Montserrat] text-[#a6304f] leading-relaxed'>
                        IEEE WIE ENIT Student Affinity Group is a{' '}
                        <span className='font-semibold text-[#bd0060]'>vibrant community</span>{' '}
                        dedicated to promoting gender diversity and empowering women 
                        in engineering, fostering innovation and leadership in technological fields.
                    </p>
                    
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='p-4 bg-gradient-to-br from-[#de8aa5]/20 to-[#6c9727]/20 rounded-xl border border-[#bd0060]/20'>
                            <h4 className='font-semibold font-[Quicksand] text-[#bd0060] mb-2'>Our Focus</h4>
                            <p className='text-sm font-[Montserrat] text-[#541d36]'>
                                Creating opportunities for networking, mentorship, and professional development
                            </p>
                        </div>
                        
                        <div className='p-4 bg-gradient-to-br from-[#7b42ce]/20 to-[#e2b93c]/20 rounded-xl border border-[#7b42ce]/20'>
                            <h4 className='font-semibold font-[Quicksand] text-[#7b42ce] mb-2'>Our Methods</h4>
                            <p className='text-sm font-[Montserrat] text-[#541d36]'>
                                Workshops, seminars, and events to build valuable skills and support
                            </p>
                        </div>
                    </div>
                    
                    <div className='p-6 bg-gradient-to-r from-[#6c9727]/10 via-[#e2b93c]/10 to-[#7b42ce]/10 rounded-xl '>
                        <p className='md:text-lg font-[Montserrat] text-[#541d36] leading-relaxed'>
                            Join the WIE ENIT Student Affinity Group to{' '}
                            <span className='font-semibold text-[#bd0060]'>connect with fellow women in engineering</span>, 
                            foster personal growth, and make a{' '}
                            <span className='font-semibold text-[#7b42ce]'>positive impact</span>{' '}
                            across diverse engineering disciplines, including the emerging field of agricultural technology.
                        </p>
                    </div>
                    
                    <div className='flex items-center gap-4 mt-8'>
                        <div className='flex -space-x-2'>
                            {/* Ambassador color variants as per brand guide */}
                            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#6c9727] to-[#6c9727]/80 border-2 border-white shadow-sm' title='Ambassador Type A - Pistachio'></div>
                            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#e2b93c] to-[#e2b93c]/80 border-2 border-white shadow-sm' title='Ambassador Type B - Wheat Yellow'></div>
                            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#940848] to-[#940848]/80 border-2 border-white shadow-sm' title='Ambassador Type C - Vivid Pink'></div>
                            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#7b42ce] to-[#7b42ce]/80 border-2 border-white shadow-sm' title='Ambassador Type D - Lavender'></div>
                        </div>
                        <p className='text-sm font-[Montserrat] text-[#442332]'>Join our growing community</p>
                    </div>
                </div>
            </div>
        </section>
    );
}