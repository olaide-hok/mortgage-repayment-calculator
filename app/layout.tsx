import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const PlusJakartaSans = localFont({
    src: [
        {
            path: '../public/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '../public/assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--ff-plus-jakarta-sans',
});

export const metadata: Metadata = {
    title: 'A mortgage calculator',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${PlusJakartaSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
