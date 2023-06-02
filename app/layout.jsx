import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Menu from '@components/Menu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Menu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
