import { cn } from '@/lib/utils'; // Assuming a utility for className concatenation

const Badge = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span
            className={cn(
                'text-white font-bold uppercase bg-[#bd0060] px-6 py-2 rounded-full w-fit font-quicksand',
                className
            )}
        >
            {text}
        </span>
    );
};

export default Badge;