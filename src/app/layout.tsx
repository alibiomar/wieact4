import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';
import './globals.css';

export const metadata: Metadata = {
    title: 'WIE ACT 4.0',
    description: 'Women in Engineering Annual Congress of Tunisia 4.0',
    keywords: 'WIE ACT, Women in Engineering, Congress, Tunisia, 2025',
    openGraph: {
        title: 'WIE ACT 4.0',
        description: 'Women in Engineering Annual Congress of Tunisia 4.0',
        url: 'https://wie-act.tn',
        type: 'website',
        images: [
            {
                url: 'https://wie-act.tn/images/logo.webp',
                width: 800,
                height: 600,
                alt: 'WIE ACT 4.0'
            }
        ]
    }
};

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={oswald.className}>
            <body className='overflow-x-hidden'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
