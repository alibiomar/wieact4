"use client";
import { useState, useEffect, useRef } from 'react';
import Badge from '@/components/badge';
import TeamCard from '@/components/cards/team-card';

const TeamsSection = ({
  title,
  description,
  teams
}: {
  title: string;
  description?: string;
  teams: {
    name: string;
    description: string;
    imageUrl: string;
  }[];
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize visible cards array
    setVisibleCards(new Array(teams.length).fill(false));
    
    // Staggered animation for team cards
    const timeouts = teams.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, 600 + index * 150)
    );

    // Set up interval to change active team member
    const interval = setInterval(() => {
      setActiveIndex(prev => prev === null ? 0 : (prev + 1) % teams.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [teams.length]);

  // Enhanced scroll-based parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        
        // Apply parallax to floating elements
        const floatingElements = sectionRef.current.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
          const speed = 0.3 + index * 0.1;
          const yOffset = scrollProgress * 50 * speed;
          (element as HTMLElement).style.transform = `translateY(${yOffset}px) rotate(${scrollProgress * 2}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id='teams-section'
      className='relative min-h-screen flex items-center justify-center overflow-hidden py-20 -mb-24'
    >


      {/* Enhanced animated floating elements with different sizes and speeds */}
      <div className="absolute inset-0 opacity-40 z-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#7400e0] to-[#9d4edd] rounded-full mix-blend-soft-light filter blur-[60px] md:blur-[80px] animate-float opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-56 h-56 md:w-96 md:h-96 bg-gradient-to-br from-[#e2b93c] to-[#f4a261] rounded-full mix-blend-soft-light filter blur-[70px] md:blur-[90px] animate-float-delayed opacity-50"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-[#6c9727] to-[#8bc34a] rounded-full mix-blend-soft-light filter blur-[50px] md:blur-[70px] animate-float-slow opacity-45"></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-[#925775] to-[#c77dff] rounded-full mix-blend-soft-light filter blur-[40px] md:blur-[60px] animate-float-fast opacity-35"></div>
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 z-0 opacity-25">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'w-1 h-1 bg-white' : 
              i % 3 === 1 ? 'w-0.5 h-0.5 bg-purple-300' : 
              'w-1.5 h-1.5 bg-yellow-200'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className='grid lg:grid-cols-1 gap-20 items-center'>
          <div className='space-y-12'>
            {/* Enhanced header section */}
            <div className="space-y-8 text-center">
              <div className={`transition-all duration-1000 ease-out transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}>
                <Badge 
                  text={title} 
                    className='bg-[#6c9727]'
                />
              </div>
              
              <h3 className={`md:text-2xl text-xl font-bold uppercase bg-[#473c1f] bg-clip-text text-transparent transition-all duration-1200 ease-out transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              } leading-tight tracking-wide`}>
                {description ?? ''}
              </h3>
              
              {/* Decorative line */}
              <div className={`mx-auto w-0 h-0.5 bg-gradient-to-r from-transparent via-[#925775] to-transparent transition-all duration-1500 ease-out ${
                isVisible ? 'w-32' : 'w-0'
              }`}></div>
            </div>
            
            {/* Enhanced team cards grid with improved spacing and animations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className={`transition-all duration-800 ease-out transform ${
                    visibleCards[index] 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-20 opacity-0 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <TeamCard
                    name={team.name}
                    description={team.description}
                    imageUrl={team.imageUrl}
                  />
                </div>
              ))}
            </div>
            
            {/* Team counter */}
            <div className={`text-center transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <p className="text-slate-400 text-sm">
                Meet our team of {teams.length} dedicated professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(2deg) scale(1.05);
          }
          66% {
            transform: translateY(-15px) rotate(-2deg) scale(1.02);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-25px) rotate(3deg) scale(1.08);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-12px) rotate(-1deg) scale(1.03);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-18px) rotate(1.5deg) scale(1.04);
          }
          75% {
            transform: translateY(-8px) rotate(-1.5deg) scale(1.02);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite 3s;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite 6s;
        }

        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default TeamsSection;