'use client'
import { Calendar, Clock, Award, MapPin, Users, Globe } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const EventDate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Background with subtle gradient matching NewsSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#efdeff] to-[#fef4d0] z-0"></div>
      
      {/* Decorative elements matching NewsSection */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#541d36]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#6c9727]/10 rounded-full blur-2xl animate-float-delayed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header matching NewsSection style */}
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl font-black uppercase text-[#541d36] mb-4">
            Event <span className="text-[#e2b93c]">Dates</span>
          </h4>
          <p className="text-lg text-[#442332]/80 max-w-xl mx-auto">
            Mark your calendar for IEEE WIE ACT 4.0 - two days of innovation, networking, and empowerment
          </p>
        </div>
        
        <div className={`flex flex-col lg:flex-row justify-center items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Day 1 */}
          <div className='bg-white/80 backdrop-blur-md border border-[#541d36]/20 rounded-2xl p-6 min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex flex-col items-center gap-3'>
              <div className="flex items-center gap-2 text-[#e2b93c]">
                <Calendar size={20} />
                <span className="text-sm font-medium">DAY ONE</span>
              </div>
              
              <h4 className='text-4xl font-bold text-[#442332] text-center'>
                <span className='text-[#e2b93c]'>11</span>
                <br />
                <span className="text-xl font-light">October 2025</span>
              </h4>
              
              <div className="w-full space-y-2 mt-3">
                <div className="flex items-center gap-2 text-[#442332]/90 justify-center">
                  <Clock size={18} />
                  <p className='text-lg font-medium'>10:00 AM</p>
                </div>
                
                <div className="flex items-center gap-2 text-[#442332]/80 text-sm justify-center">
                  <MapPin size={15} />
                  <span>Opening Ceremony</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 border border-[#442332]/20 shadow-md">
              <Users size={20} className="text-[#e2b93c]" />
            </div>
          </div>

          {/* Day 2 */}
          <div className='bg-white/80 backdrop-blur-md border border-[#442332]/20 rounded-2xl p-6 min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex flex-col items-center gap-3'>
              <div className="flex items-center gap-2 text-[#e2b93c]">
                <Calendar size={20} />
                <span className="text-sm font-medium">DAY TWO</span>
              </div>
              
              <h4 className='text-4xl font-bold text-[#442332] text-center'>
                <span className='text-[#e2b93c]'>12</span>
                <br />
                <span className="text-xl font-light">October 2025</span>
              </h4>
              
              <div className="w-full space-y-2 mt-3">
                <div className="flex items-center gap-2 text-[#442332]/90 justify-center">
                  <Clock size={18} />
                  <p className='text-lg font-medium'>2:00 PM</p>
                </div>
                
                <div className="flex items-center gap-2 text-[#442332]/80 text-sm justify-center">
                  <Award size={15} />
                  <span>Awards Ceremony</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue information */}
<div className="text-center mt-12 flex">
  <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-[#442332]/20 max-w-xl mx-auto shadow-lg">
    <div className="flex items-center justify-center gap-2 text-[#e2b93c] mb-2">
      <MapPin size={20} />
      <span className="font-medium text-lg">Venue</span>
    </div>
    <h5 className="text-xl font-bold text-[#442332] mb-2">
      HOTEL LAICO (HAMMAMET)
    </h5>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.5121868804445!2d10.538988011459258!3d36.37259309157176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd64810c3eafbd%3A0xed1c652abc26e90c!2sH%C3%B4tel%20Laico%20Hammamet%20%26%20Thalasso!5e0!3m2!1sfr!2stn!4v1757807817388!5m2!1sfr!2stn"
      width="100%"
      height="300"
      className="rounded-lg border border-[#442332]/20 shadow-md"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>

      <style jsx>{`
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

export default EventDate;