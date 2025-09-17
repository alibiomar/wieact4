import { ebTeams } from '@/constants/teams';
import EventDate from './_components/event-date-section';
import GetToKnow from './_components/get-to-know-section';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import Speakers from './_components/speakers-section';
import TeamsSection from './_components/teams-section';
import TechChallenge from './_components/tech-challenge-section';

export default function Home() {
    return (
        <main className='flex flex-col '>

            <HeroSection />
            <NewsSection />
            <GetToKnow />
            <EventDate />
            <TechChallenge />
            {/* <Speakers /> */}
            <TeamsSection
                title='Our Teams'
                description='Get to know the dedicated team behind WIE ACT 4.0'
                teams={ebTeams}
            />
        </main>
    );
}
