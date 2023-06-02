import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '@/public/home.png';
import NavBtn from './NavBtn';
import Row from '../Row';

const Header = () => {
  return (
    <header className="relative z-50">
      <nav>
        <Row as="ul" className="justify-between p-[15rem]">
          <li>
            <Link href="/" className="block w-[120rem] h-[110rem]">
              <Image priority src={homeIcon} alt="main logo" />
            </Link>
          </li>
          <li>
            <NavBtn />
          </li>
        </Row>
      </nav>
    </header>
  );
};

export default Header;
