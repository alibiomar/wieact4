'use client'
import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, Users, Clock, Trophy, Target, Lightbulb, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '/public/images/bgGold.png';
const TechChallenge = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id='tech-challenge-section'
      className='relative py-20 px-4 sm:px-6 md:px-16 overflow-hidden'
    >
      {/* Background with gradient overlay */}
      <div className='absolute inset-0 z-0 bg-gradient-to-br from-[#2a0b46] via-[#3d1268] to-[#5a23a5]'>
        <Image
          src={BackgroundImage}
          alt='Agriculture Technology Background'
          fill
          className='object-cover'
          quality={100}
          priority
        />      </div>
      {/* White gradient overlays for seamless merging */}
      <div className='absolute inset-0 z-[1] pointer-events-none'>
        {/* Top white gradient */}
        <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#fef4d0] via-[#fef4d0]/70 to-transparent'></div>
        
        {/* Bottom white gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white to-transparent'></div>
      </div>
      {/* Animated floating elements */}
      <div className='absolute inset-0 opacity-50 z-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#541d36]  rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float opacity-60'></div>
        <div className='absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96  bg-[#541d36] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-2000 opacity-40'></div>
        <div className='absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-[#6c9727] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-4000 opacity-40'></div>
      </div>
      
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-10'>
            <div className='space-y-6'>
              <Badge 
                text='WIE ACT Technical Challenge' 
                className='bg-gradient-to-r from-[#541d36] to-[#3a1526] text-white transition-all duration-300 shadow-lg shadow-[#541d36]/40' 
              />
              <div className='relative'><h1 className='font-round-gothic text-4xl md:text-6xl font-bold uppercase text-[#610d6595] leading-tight'>
                AgriTech
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-[#541d36] to-[#610d65]'>Innovation</span>
              </h1>
              <h2 className=' text-[#3a1526] absolute top-0 left-1/3 z-10  text-4xl  font-normal normal-case'>Challenge</h2>
            </div></div>
            
            {/* Enhanced description */}
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group hover:border-[#541d36]/50 transition-all duration-300'>
              <p className='font-montserrat text-lg text-white/90 leading-relaxed mb-6'>
                The <strong>WIE ACT Tech Challenge</strong> is our signature innovation competition focused on <span className='text-[#541d36] font-semibold'>agricultural technology solutions</span>. Participants will tackle real-world challenges while building innovative solutions that empower women in agriculture within an evolving technological landscape. The final chance to submit your project is October 4th.
              </p>
              
              <div className='bg-[#541d36]/20 rounded-xl p-4 mb-6  group-hover:bg-[#541d36]/30 transition-all duration-300'>
                <p className='font-montserrat text-white/90 text-sm italic'>
                  'Join technical and non-technical challenges designed to promote women's role in technology and ethical innovation within the agricultural sector.'
                </p>
              </div>
              
              {/* Challenge highlights grid */}
              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center group-hover:scale-105 transition-transform duration-300'>
                  <div className='bg-white/10 rounded-full p-3 w-fit mx-auto mb-2 group-hover:bg-[#541d36]/20 transition-colors'>
                    <Clock size={20} className='text-[#541d36]' />
                  </div>
                  <div className='font-round-gothic text-xl font-bold text-[#541d36]'>Oct 4th</div>
                  <div className='font-montserrat text-white/80 text-xs'>Submission Deadline</div>
                </div>
                <div className='text-center group-hover:scale-105 transition-transform duration-300'>
                  <div className='bg-white/10 rounded-full p-3 w-fit mx-auto mb-2 group-hover:bg-[#541d36]/20 transition-colors'>
                    <Trophy size={20} className='text-[#541d36]' />
                  </div>
                  <div className='font-round-gothic text-2xl font-bold text-[#541d36]'>+3K TND</div>
                  <div className='font-montserrat text-white/80 text-xs'>Prize Pool</div>
                </div>
                <div className='text-center group-hover:scale-105 transition-transform duration-300'>
                  <div className='bg-white/10 rounded-full p-3 w-fit mx-auto mb-2 group-hover:bg-[#541d36]/20 transition-colors'>
                    <Users size={20} className='text-[#541d36]' />
                  </div>
                  <div className='font-round-gothic text-2xl font-bold text-[#541d36]'>Teams</div>
                  <div className='font-montserrat text-white/80 text-xs'>Collaboration</div>
                </div>
              </div>

              {/* Challenge categories */}
              <div className='space-y-3'>
                <h4 className='text-sm font-bold text-[#541d36] uppercase tracking-wider'>Challenge Categories</h4>
                <div className='flex flex-wrap gap-2'>
                  <span className='bg-white/10 px-3 py-1 rounded-full text-xs font-montserrat text-white border border-white/20 hover:bg-[#541d36]/20 hover:border-[#541d36]/30 transition-colors'>Technical Solutions</span>
                  <span className='bg-white/10 px-3 py-1 rounded-full text-xs font-montserrat text-white border border-white/20 hover:bg-[#541d36]/20 hover:border-[#541d36]/30 transition-colors'>Non-Technical Innovation</span>
                  <span className='bg-white/10 px-3 py-1 rounded-full text-xs font-montserrat text-white border border-white/20 hover:bg-[#541d36]/20 hover:border-[#541d36]/30 transition-colors'>AgriTech Focus</span>
                  <span className='bg-white/10 px-3 py-1 rounded-full text-xs font-montserrat text-white border border-white/20 hover:bg-[#541d36]/20 hover:border-[#541d36]/30 transition-colors'>Women Empowerment</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='https://forms.gle/5HVfGqzxiba9jqba6'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block'
              >
                <Button size='lg' className='relative overflow-hidden bg-gradient-to-r from-[#541d36] to-[#3a1526] text-white border-0 group w-full sm:w-auto px-8 shadow-lg shadow-[#541d36]/40 hover:shadow-[#541d36]/60 transition-all duration-300'>
                  <span className='relative z-10 flex items-center'>
                    Register for Challenge
                    <ChevronRight size={24} className='ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                  </span>
                </Button>
              </a>
              <a href='/pdf/specification book.pdf' download='GuidelinesWIE.pdf'>
                      <Button 
                        size='lg' 
                        className='relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md group transition-all duration-300 px-8 font-quicksand'
                      >
                        <span className='relative z-10'>Download Guidelines</span>
                        <span className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                      </Button>
                    </a>

            </div>


          </div>
          
          {/* Enhanced visual representation */}
          <div className='relative hidden lg:block'>
            <div className='relative w-96 h-96 mx-auto group'>
              {/* Main challenge visual */}
              <div className='absolute inset-0 bg-white/5 rounded-3xl border border-white/20 backdrop-blur-sm group-hover:border-[#541d36]/50 transition-all duration-500'>
                {/* Floating icons */}
                <div className='absolute top-8 left-8 w-4 h-4 bg-[#541d36] rounded-full animate-ping'></div>
                <div className='absolute top-20 right-12 w-3 h-3 bg-[#541d36] rounded-full animate-pulse'></div>
                <div className='absolute bottom-16 left-16 w-5 h-5 bg-[#6c9727] rounded-full animate-bounce'></div>
                <div className='absolute bottom-8 right-8 w-4 h-4 bg-[#de8aa5] rounded-full animate-ping'></div>
                
                {/* Agricultural tech icons */}
                <div className='absolute top-16 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-300'>
                  <div className='bg-[#6c9727]/20 rounded-full p-3 group-hover:bg-[#6c9727]/30 transition-colors'>
                    <Target size={24} className='text-[#6c9727]' />
                  </div>
                </div>
                
                <div className='absolute left-16 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300'>
                  <div className='bg-[#541d36]/20 rounded-full p-3 group-hover:bg-[#541d36]/30 transition-colors'>
                    <Lightbulb size={24} className='text-[#541d36]' />
                  </div>
                </div>
                
                <div className='absolute right-16 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300'>
                  <div className='bg-[#541d36]/20 rounded-full p-3 group-hover:bg-[#541d36]/30 transition-colors'>
                    <Users size={24} className='text-[#541d36]' />
                  </div>
                </div>
              </div>
              
              {/* Center content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-full p-6 mb-4 border border-white/20 group-hover:border-[#541d36]/50 transition-all duration-300'>
                    <Award size={48} className='mx-auto text-[#541d36]' />
                  </div>
                  <div className='font-round-gothic text-2xl font-bold mb-2'>AgriWIE</div>
                  <div className='font-montserrat text-sm opacity-80 mb-3'>Innovation Challenge</div>
                  <div className='text-xs bg-[#541d36]/20 px-3 py-1 rounded-full border border-[#541d36]/30 group-hover:bg-[#541d36]/30 transition-colors'>
                    Submit by Oct 4th
                  </div>
                </div>
              </div>
              
              {/* Corner badges */}
              <div className='absolute -top-4 -right-4 bg-[#541d36] text-[#541d36] rounded-full p-2 border-4 border-white/20 group-hover:scale-110 transition-transform duration-300'>
                <Trophy size={16} />
              </div>
              
              <div className='absolute -bottom-4 -left-4 bg-[#541d36] text-white rounded-full p-2 border-4 border-white/20 group-hover:scale-110 transition-transform duration-300'>
                <Lightbulb size={16} />
              </div>
            </div>
            
            {/* Challenge timeline */}
            <div className='mt-8 space-y-4'>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20 group hover:border-[#541d36]/50 transition-all duration-300'>
                <h5 className='text-sm font-bold text-[#541d36] mb-2'>Challenge Timeline</h5>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between text-white/80 group-hover:text-white/90 transition-colors'>
                    <span className='flex items-center gap-2'>
                      <Calendar size={14} />
                      Registration Opens
                    </span>
                    <span className='text-[#541d36]'>September 2025</span>
                  </div>
                  <div className='flex justify-between text-white/80 group-hover:text-white/90 transition-colors'>
                    <span className='flex items-center gap-2'>
                      <Clock size={14} />
                      Submission Deadline
                    </span>
                    <span className='text-[#541d36]'>Oct 4, 2025</span>
                  </div>
                  <div className='flex justify-between text-white/80 group-hover:text-white/90 transition-colors'>
                    <span className='flex items-center gap-2'>
                      <Award size={14} />
                      Awards Ceremony
                    </span>
                    <span className='text-[#541d36]'>Oct 12, 2025</span>
                  </div>
                </div>
              </div>
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

export default TechChallenge;