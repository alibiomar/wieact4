import Badge from '@/components/badge';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className='flex flex-col md:px-40 px-10 md:w-1/2 pt-28 z-[99] '>
            <div className='flex flex-col'>
                <h1 className='md:text-6xl text-4xl font-bold text-[#ffffff]'>WIE ACT 4.0</h1>
                <p className='md:text-lg md:py-10 text-white'>
WIE ACT Tunisia 4.0, hosted by the IEEE WIE ENIT Student Affinity Group in collaboration with the IEEE WIE Tunisia Section Affinity Group, is the leading gathering for women in engineering. This year’s congress, themed “AgriWIE: Women Empowering the Agriculture Field,” highlights innovation, diversity, and the role of women in agriculture and technology. Participants will benefit from inspiring speakers, technical workshops, and rich networking opportunities. Join us as we empower, innovate, and lead the future of engineering together!
                </p>
                
            </div>
        </section>
    );
}
