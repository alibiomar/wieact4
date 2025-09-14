import { ebTeams} from '@/constants/teams';
//import { oc } from '@/constants/teams';
import TeamsSection from '../_components/teams-section';
import EnitSb from './_components/enit-sb';
import HeroSection from './_components/hero-section';
import PreviousEditions from './_components/previous-editions';
import WieEsprit from './_components/wie-enit';
import Image from 'next/image';
import BackgroundImage from '../../../public/images/hero-bg.webp';

export default function AboutUsPage() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20'>

            <div
                className='absolute top-0 right-0 w-[981px] h-[954px] bg-cover z-10 bg-center bg-no-repeat rounded-t-lg drop-shadow-2xl hidden lg:block'
                style={{
                    backgroundImage: `url(/images/hero-about-bg.webp)`
                }}></div>
      <div className='absolute inset-0 -z-10 '>
        <Image
          src={BackgroundImage}
          alt='golden wheat field'
          fill
          className='object-cover'
          quality={100}
          priority
        />           
        <div className='absolute inset-0 bg-gradient-to-b  from-black/60 via-black/0 to-black/30 backdrop-blur-md'></div>
   </div>
        <div className='absolute inset-0 z-[1] pointer-events-none'>

        {/* Bottom white gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent'></div>
      </div>
            <HeroSection />
            <PreviousEditions />
            <div
                className='relative w-full md:h-[800px] h-auto bg-cover bg-center bg-no-repeat  rounded-t-lg md:-mt-40 -mt-20'
                style={{
                    backgroundImage: `url(/images/enit.jpg)`
                }}>              <div className='absolute inset-0 z-[1] pointer-events-none'>
        <div className='absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white via-white to-transparent'></div>

        <div className='absolute top-0 left-0 right-0 h-36 bg-gradient-to-t from-transparent via-white to-white'></div>
      </div></div>
            <EnitSb />
            <WieEsprit />
            <TeamsSection
                title='Our Teams'
                description='Get to know the dedicated team behind WIE ACT 3.0'
                teams={ebTeams}
            />
            {/* {Object.entries(oc).map(([teamName, members]) => (
                <TeamsSection
                    key={teamName}
                    title={teamName}
                    teams={members as any}
                />
            ))} */}
        </main>
    );
}
