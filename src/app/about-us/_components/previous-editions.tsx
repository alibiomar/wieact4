import Badge from '@/components/badge';
import EditionCard from './edition-card';

export default function PreviousEditions() {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10 md:pt-0 -mt-52 md:mt-0 z-20 pt-40'>
            <Badge text='PREVIOUS VERSIONS' />
            <h3 className="md:text-4xl text-2xl font-bold text-[#f67cb3]">
  WIE ACT 1.0 &amp; 2.0 &amp; 3.0
</h3>


            <div className='flex md:flex-row flex-col items-stretch gap-20 w-full justify-center'>
                <EditionCard
                    title='wie act 1.0'
                    description=" The first edition of IEEE Women in Engineering Annual Congress Tunisia was organized in collaboration between the IEEE WIE ENIS and ENIT Student Affinity Groups. It took place on October 1 and 2, 2022, at the Orient Palace Hotel in Sousse.
The theme focused on Artificial Intelligence in Healthcare, featuring a diverse program including technical challenges, workshops, keynote speeches, and social activities."
                    image='/images/editions/wie-act-1.webp'
                    logo='/images/editions/wie-act-1-logo.webp'
                />
                <EditionCard
                    title='wie act 2.0'
                    description=" The 2nd edition of IEEE Women in Engineering Annual Congress Tunisia (WIE ACT 2.0) was organized in collaboration between the IEEE WIE ENIS and IEEE WIE ENETCom Student Affinity Groups, alongside the IEEE WIE Tunisia Section Affinity Group. It took place on September 30 and October 1, 2023, at Hotel Amir Palace in Monastir.
Under the theme “Empowering Women in Artificial Intelligence,” the congress featured a diverse program including technical and non-technical challenges, workshops, and networking sessions.
This edition was recognized internationally and honored with the prestigious Darel Chong Student Activity Bronze Award."
                    image='/images/editions/wie-act-2.webp'
                    logo='/images/editions/wie-act-2-logo.webp'
                />
                <EditionCard
                    title='wie act 3.0'
                    description=" The 3rd edition of IEEE Women in Engineering Annual Congress Tunisia (WIE ACT 3.0) was organized by the IEEE WIE Esprit Student Affinity Group and held on October 12–13, 2024, at Laico Hotel Hammamet. Under the theme “Revolutionizing Women's Privacy in a Digital World,” the event focused on empowering women engineers to navigate digital privacy challenges. WIE ACT 3.0 included both technical and non-technical challenges, interactive workshops, and a meet-and-greet event held in collaboration with the IEEE WIE Region 8 Affinity Group, fostering regional networking and knowledge exchange."
                    image='/images/editions/wie act 3.00.jpg'
                    logo='/images/editions/wie-act-3-logo.webp'
                />
            </div>
        </section>
    );
}
