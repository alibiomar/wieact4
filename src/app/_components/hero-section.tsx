'use client'
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import eps from '/public/images/sponsors/eps.png';
import ias from '/public/images/sponsors/ias.png';
import actia from '/public/images/sponsors/actia.png';
import starwave from '/public/images/sponsors/starwave.png';
import wie from '/public/images/sponsors/wie.png';
import gomycode from '/public/images/sponsors/gomycode.png';
import orange from '/public/images/sponsors/orange.png';
import smc from '/public/images/sponsors/smc.png';
import students from '/public/images/sponsors/students.webp';
import enit from '/public/images/sponsors/enit.png';
import section from '/public/images/sponsors/section.webp';
import BackgroundImage from '/public/images/hero-bg.webp';
import { StaticImageData } from 'next/image';

interface Sponsor {
  src: StaticImageData;
  alt: string;
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Innovate', 'Empower', 'Connect', 'Inspire'];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const sponsors: Sponsor[] = [
    { src: students, alt: 'IEEE Students Logo' },
    { src: smc, alt: 'IEEE SMC Logo' },
    { src: eps, alt: 'IEEE EPS Logo' },
    { src: actia, alt: 'ACTIA Group Logo' },
    { src: starwave, alt: 'Starwave Logo' },
    { src: gomycode, alt: 'GoMyCode Logo' },
    {src: orange, alt: 'Orange Logo' },
    { src: ias, alt: 'IEEE Industry Applications Society Logo' },
    { src: section, alt: 'IEEE Tunisia Section Logo' },
    { src: enit, alt: 'Esprit Logo' },
    { src: wie, alt: 'IEEE WIE Logo' },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id='hero-section'
      className='relative min-h-screen flex items-center justify-center overflow-hidden md:py-10 py-28'
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="WIE ACT 4.0 Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>
      </div>
            <div className="absolute inset-0 z-[1] pointer-events-none">

        {/* Bottom white gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f9f0f6] via-[#f9f0f6] to-transparent"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#bd0060] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-float animation-delay-4000 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 text-center lg:text-left flex flex-col justify-center items-center py-10 md:py-20">
        {/* Main title with gradient text */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 flex flex-col justify-center items-center">
          <div className="relative">
            <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase flex flex-col gap-3 md:gap-5 justify-center items-center leading-none'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">WIE ACT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#bd0060] via-[#e00070] to-[#ff0080]">4.0</span>
            </h1>

            {/* Animated subtitle with typewriter effect */}
            <div className="absolute top-0 left-full -ml-6 md:-ml-8 h-8 md:h-12 mt-0">
              <h2 className='text-lg md:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bd0060] to-[#ff8a00]'>
                <span className="inline-block min-w-[120px] md:min-w-[180px] text-top">
                  {words[currentWord]}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>
          </div>

          <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium uppercase text-white/90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl tracking-wide mt-2 md:mt-4 text-center lg:text-left'>
            Women in Engineering Annual Congress of Tunisia
          </h3>
        </div>

        {/* Enhanced description with glassmorphism */}
        <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto lg:mx-0 mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl shadow-[#bd0060]/20 hover:shadow-[#bd0060]/30 transition-all duration-500">
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed'>
              The IEEE Women in Engineering Annual Congress Tunisia brings together students, young professionals, and technology enthusiasts under the theme <span className="font-semibold text-[#ff8a00]">"AgriWIE: Women Empowering the Agriculture Field."</span> Join us for keynote speeches, technical workshops, and networking sessions that promote women's role in technology and innovation.
            </p>
          </div>
        </div>

        {/* Enhanced CTA buttons with hover effects */}
        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start mb-12 md:mb-20'>
          <a href="https://www.facebook.com/profile.php?id=100084776743566"><Button size='lg' className='relative overflow-hidden bg-gradient-to-r from-[#bd0060] to-[#e00070] hover:from-[#e00070] hover:to-[#ff0080] text-white border-0 group shadow-2xl shadow-[#bd0060]/40 hover:shadow-[#bd0060]/60 transition-all duration-300 px-6 py-3 md:px-8 md:py-4'>
            <span className="relative z-10 flex items-center">
              Explore Event
              <ChevronRight size={20} className='ml-2 group-hover:translate-x-1 transition-transform duration-300' />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#e00070] to-[#ff0080] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button></a>
          <a href="#"><Button size='lg' className='relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md group transition-all duration-300 px-6 py-3 md:px-8 md:py-4'>
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button></a>
        </div>

        {/* Sponsors section with enhanced styling */}
        <div aria-label='Our Valued Sponsors' className="mt-12 md:mt-20 w-full">
          <div className="relative">
            {/* Section header with animated underline */}
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-4 tracking-wide relative inline-block">
                In partnership with
              </h3>
            </div>

            {/* Logo marquee container */}
            <div className="relative overflow-hidden py-4">
              <div className="w-full">
                <div className="logo-marquee flex items-center">
                  {duplicatedSponsors.map((sponsor: Sponsor, index: number) => (
                    <div
                      key={`${sponsor.alt}-${index}`}
                      className={`group relative flex-shrink-0 transition-all duration-500 mx-4 md:mx-8 ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        transitionDelay: `${(index % sponsors.length) * 50}ms`
                      }}
                    >
                      {/* Logo container with hover effect */}
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-5 border border-white/10 group-hover:border-[#bd0060]/50 group-hover:bg-[#bd0060]/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#bd0060]/20 hover:-translate-y-1">
                        <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center">
                          <Image
                            src={sponsor.src}
                            alt={sponsor.alt}
                            className="object-contain max-h-full max-w-full filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                            width={128}
                            height={64}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add the CSS animations */}
      <style jsx>{`
        .logo-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        @media (max-width: 768px) {
          .logo-marquee {
            animation: scroll 20s linear infinite;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

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

        .animate-underline {
          background-size: 200% 100%;
          animation: underlineGradient 3s linear infinite;
        }

        @keyframes underlineGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
