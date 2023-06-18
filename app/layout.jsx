import { Inter } from 'next/font/google';
import '@app/globals.css';
import { Footer, Header, Menu } from '@components';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black  selection:bg-pink-600 `}>
        <Menu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
