import Badge from '@/components/badge';
import SpeakerCard from '@/components/cards/speaker-card';
import { speakers } from '@/constants/speakers';

const Speakers = () => {
    return (
        <section
            id='speakers-section'
            className='relative py-20 px-4 sm:px-6 md:px-16 overflow-hidden'>
            <div className='flex flex-col gap-4'>
                <Badge text='Our Speakers' />
                <h3 className='md:text-5xl text-4xl font-bold uppercase'>
                    Speaker Lineup
                </h3>
            </div>
            <div className='flex md:flex-row flex-col overflow-x-auto overflow-y-hidden md:items-start items-center gap-10 py-10'>
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        description={speaker.description}
                        imageUrl={speaker.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Speakers;
