import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white font-sans p-[15px] text-[12px] flex-col md:flex md:justify-between md:items-center md:text-[14px] md:flex-row-reverse ">
      <nav>
        <ul className="underline transition-all flex-col md:flex md:flex-row">
          <li className="hover:text-shadow-link  mb-[12px]  md:mb-[0px]">
            <Link href="/imprint">Imprint</Link>
          </li>

          <li className="hover:text-shadow-link pl-[0px] mb-[12px] md:pl-[12px] md:mb-[0px] lg:pl-[32px] xl:pl-[64px]">
            <Link href="https://www.instagram.com/sophie.lazari/" target="blank">
              Instagram
            </Link>
          </li>
          <li className="hover:text-shadow-link  pl-[0px] md:pl-[12px] lg:pl-[32px] xl:pl-[64px]">
            <Link href="mailto: ohnoitzsophie@gmail.com">Contact</Link>
          </li>
        </ul>
      </nav>
      <p className=" mt-[40px] mb-[12px] md:mt-[0px] md:mb-[0px]">
        ©2018-2023 Sophie Lazari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
