import Image from 'next/image';

type Props = {
    name: string;
    description: string;
    imageUrl: string;
};

const TeamCard = ({ name, description, imageUrl }: Props) => {
    return (
        <div className='flex flex-col items-center self-center group cursor-pointer'>
            {/* Enhanced image container with hover effects */}
            <div className='relative mb-6 transform transition-all duration-500 ease-out group-hover:scale-105'>
                <Image
                    src={imageUrl}
                    width={250}
                    height={250}
                    alt={`Image of ${name}`}
                    className='rounded-full w-60 h-60 object-cover
                             transition-all duration-500 ease-out
                             group-hover:shadow-2xl group-hover:shadow-[#6c9727]/30'
                />
 
                
                {/* Ring animation */}
                <div className='absolute inset-0 rounded-full border-2 border-[#6c9727]/40 
                              scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 
                              transition-all duration-700 ease-out'></div>
            </div>
            
            {/* Enhanced typography */}
            <div className='text-center transform transition-all duration-300 group-hover:-translate-y-1'>
                <h4 className='text-2xl font-bold uppercase text-[#6c9727] mb-2 
                             transition-all duration-300 group-hover:text-[#b6dc7a] 
                             group-hover:tracking-wider'>
                    {name}
                </h4>
                <p className='text-sm opacity-60 text-[#585858] leading-relaxed max-w-xs
                            transition-all duration-300 group-hover:opacity-80 group-hover:text-[#4a4a4a]'>
                    {description}
                </p>
            </div>
    
        </div>
    );
};

export default TeamCard;