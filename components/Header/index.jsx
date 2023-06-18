import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '@public/home.png';
import NavBtn from './NavBtn';

const Header = () => {
  return (
    <header className="relative z-50">
      <nav>
        <ul className="flex justify-between items-center p-[15px]">
          <li>
            <Link
              href="/"
              className="block w-[50px] h-[50px]  sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[110px] hover:drop-shadow-hamburger"
            >
              <Image priority src={homeIcon} alt="main logo" />
            </Link>
          </li>
          <li>
            <NavBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
