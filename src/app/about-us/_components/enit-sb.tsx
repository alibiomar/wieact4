import Badge from '@/components/badge';

export default function EnitSb() {
    return (
        <section className='flex flex-col z-10 items-center justify-center gap-10 md:px-40 px-10'>
            <Badge text='MEET your host' />
            <h3 className='md:text-6xl text-3xl font-bold'>IEEE ENIT SB</h3>
            <p className='md:text-lg md:w-1/2 md:text-center'>
                IEEE ENIT Student Branch,founded in 2005, holds the distinction of being the first IEEE student branch in Tunisia. It includes 7 technical
                chapters (AESS, CIS, CS, IAS, IES, PES, MTTS, RAS) alongside two
                groups (SIGHT and WIE).
            </p>
        </section>
    );
}
