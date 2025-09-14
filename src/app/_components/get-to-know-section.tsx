'use client'
import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import BackgroundImage from '/public/images/bg.png';

const GetToKnow = () => {
  return (
    <section
      id='get-to-know-section'
      className='relative min-h-100vh flex items-center justify-center overflow-x-hidden py-20'
    >
      {/* Background image with overlays */}
      <div className='absolute bg-gradient-to-b from-white to-transparent z-0 inset-0'>
        <Image
          src={BackgroundImage}
          alt='Agriculture Technology Background'
          fill
          className='object-cover'
          quality={100}
          priority
        />
        <div className='absolute z-1 inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80  backdrop-blur-sm'></div>
      </div>

      {/* White gradient overlays for seamless merging */}
      <div className='absolute inset-0 z-[1] pointer-events-none'>
        {/* Top white gradient */}
        <div className='absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-[#f0e6f6] via-[#f0e6f6]/70 to-transparent'></div>
        
        {/* Bottom white gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-[#efdeff] via-[#efdeff]/70 to-transparent'></div>
      </div>

      {/* Animated floating elements */}
      <div className='absolute inset-0 opacity-50 z-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#7400e0] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float opacity-60'></div>
        <div className='absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#e2b93c] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-2000 opacity-40'></div>
        <div className='absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-[#6c9727] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-4000 opacity-40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center'>
        <div className=' gap-16 items-center flex sm:flex-row flex-col-reverse w-height'>
          {/* Enhanced statistics section */}
          <div className='space-y-8'>
            <div className='grid grid-cols-2 gap-6'>
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group hover:border-[#7400e0]/50'>
                <div className='flex items-center gap-3 mb-2'>
                  <Trophy size={24} className='text-[#e2b93c] group-hover:scale-110 transition-transform duration-300' />
                </div>
                <div className='font-round-gothic text-3xl font-bold text-white'>4th</div>
                <div className='font-montserrat text-white/80 text-sm'>Annual Edition</div>
              </div>
              
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group hover:border-[#6c9727]/50'>
                <div className='flex items-center gap-3 mb-2'>
                  <Users size={24} className='text-white group-hover:scale-110 transition-transform duration-300' />
                </div>
                <div className='font-round-gothic text-3xl font-bold text-white'>7K+</div>
                <div className='font-montserrat text-white/80 text-sm'>IEEE Members</div>
              </div>
            </div>
            
            {/* Additional stats */}
            <div className='grid grid-cols-2 gap-6'>
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group hover:border-[#7b42ce]/50'>
                <div className='font-round-gothic text-2xl font-bold text-white'>51+</div>
                <div className='font-montserrat text-white/80 text-sm'>Student Branches</div>
              </div>
              
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group hover:border-[#e2b93c]/50'>
                <div className='font-round-gothic text-2xl font-bold text-white'>31+</div>
                <div className='font-montserrat text-white/80 text-sm'>WIE Groups</div>
              </div>
            </div>

            {/* Legacy section */}
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group hover:border-[#541d36]/50 transition-all duration-300'>
              <h5 className='font-round-gothic text-lg font-bold text-white mb-3'>Our Legacy</h5>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between group-hover:translate-x-1 transition-transform duration-300'>
                  <span className='font-montserrat text-white/90'>WIE ACT 3.0 (2024)</span>
                  <span className='font-quicksand text-[#e2b93c]'>Digital Privacy</span>
                </div>
                <div className='flex justify-between group-hover:translate-x-1 transition-transform duration-300'>
                  <span className='font-montserrat text-white/90'>WIE ACT 2.0 (2023)</span>
                  <span className='font-quicksand text-[#e2b93c]'>AI Empowerment</span>
                </div>
                <div className='flex justify-between group-hover:translate-x-1 transition-transform duration-300'>
                  <span className='font-montserrat text-white/90'>WIE ACT 1.0 (2022)</span>
                  <span className='font-quicksand text-[#e2b93c]'>AI in Healthcare</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <a href='/pdf/Program.pdf'><Button size='lg' className='relative overflow-hidden bg-gradient-to-r from-[#7400e0] to-[#9d00ff] hover:from-[#9d00ff] hover:to-[#9d00ff] text-white border-0 group font-quicksand px-8 shadow-lg shadow-[#7400e0]/40 hover:shadow-[#7400e0]/60 transition-all duration-300'>
                <span className='relative z-10 flex items-center'>
                  Discover Program
                  <ChevronRight size={24} className='ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </span>
                <span className='absolute inset-0 bg-gradient-to-r from-[#7400e0] to-[#9d00ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </Button></a>
              <a href='/about-us'><Button size='lg' className='relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md group transition-all duration-300 px-8 font-quicksand'>
                <span className='relative z-10'>About IEEE WIE</span>
                <span className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </Button></a>
            </div>
          </div>
          
          {/* Enhanced content section */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <Badge 
                text='About IEEE WIE ACT' 
                className='bg-gradient-to-r from-[#7400e0] to-[#9d00ff] text-white hover:from-[#9d00ff] hover:to-[#9d00ff] transition-all duration-300 shadow-lg shadow-[#7400e0]/40' 
              />
              <h4 className='font-round-gothic text-4xl md:text-6xl font-bold uppercase text-white leading-tight'>
                Empowering Women in
                <span className='inline-block ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#e2b93c] to-[#ff8a00]'>Agriculture Tech</span>
              </h4>
            </div>
            
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group hover:border-[#7400e0]/50 transition-all duration-300'>
              <p className='font-montserrat text-lg text-white leading-relaxed mb-6'>
                The <strong>IEEE Women in Engineering Annual Congress of Tunisia (WIE ACT)</strong> is the premier yearly gathering of the IEEE WIE community in Tunisia. Our 4th edition brings together students, young professionals, and technology enthusiasts under the transformative theme <span className='font-brittany text-[#e2b93c] text-xl'>'AgriWIE: Women Empowering the Agriculture Field.'</span>
              </p>
              
              <p className='font-montserrat text-md text-white/80 leading-relaxed mb-6'>
                Organized by the <strong>IEEE WIE ENIT Student Affinity Group</strong> in collaboration with the <strong>IEEE WIE Tunisia Section Affinity Group</strong>, this congress serves as a dynamic platform for exploring scientific and engineering challenges while promoting women's role in technology and ethical innovation within agriculture.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Add the CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default GetToKnow;