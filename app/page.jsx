'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import illu1 from '../public/landing-page/sophie_lazari_illustration_1.jpg';
import illu2 from '../public/landing-page/sophie_lazari_illustration_2.jpg';
import illu3 from '../public/landing-page/sophie_lazari_illustration_3.jpg';
import illu4 from '../public/landing-page/sophie_lazari_illustration_4.jpg';
import illu5 from '../public/landing-page/sophie_lazari_illustration_5.jpg';
import useWindowDimensions from '@hooks/useWindowDimensions';

// export const metadata = {
//   title: 'Sophie Lazari | Home',
//   description: 'Portfolio website of Sophie Lazari'
// };

const LandingPictures = [illu1, illu2, illu3, illu4, illu5];

const HomePage = () => {
  const n = Math.floor(Math.random() * 5);
  const picture = LandingPictures[n];

  // const { height, width } = useWindowDimensions();

  // const dragwidth = width / 2;
  // const dragheight = height / 2;

  // we did it in the other project like that Achi - check if my solution works and otherwise cancel it
  // useEffect(() => {
  //   const n = Math.floor(Math.random() * 5);
  //   const picture = LandingPictures[n];
  //   document.body.style.backgroundImage = `url(${picture})`;
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.backgroundImage = '';
  //     document.body.style.overflow = '';
  //   };
  // }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '200vh' }}>
        <Image src={picture} layout="fill" objectFit="cover" />
      </div>

      <div
        className="text-black bg-white  w-[280px] h-[280px] rounded-[50%] border-[2px] border-purple flex items-center text-center	p-[20px]"
        // as={motion.div}
        // transition={{
        //   delay: 1.3,
        //   duration: 0.3
        // }}
        // initial={{ opacity: 0, scale: 0.92 }}
        // animate={{ scale: 1, opacity: 1 }}
        // exit={{
        //   opacity: 0,
        //   scale: 0.92,
        //   transition: {
        //     delay: 0.3,
        //     duration: 0.5
        //   }
        // }}
        // drag
        // dragConstraints={{
        //   top: -dragheight,
        //   left: -dragwidth,
        //   right: dragwidth,
        //   bottom: dragheight
        // }}
      >
        <span className="text-[18px]">
          Hello! I am an artist working with{' '}
          <Link href="/" className="underline">
            illustration
          </Link>
          ,{' '}
          <Link href="/" className="underline">
            graphics
          </Link>{' '}
          and{' '}
          <Link href="/" className="underline">
            performances
          </Link>
          . Read more{' '}
          <Link href="/" className="underline">
            about me
          </Link>{' '}
          or get in{' '}
          <Link href="mailto: ohnoitzsophie@gmail.com" className="underline">
            contact
          </Link>{' '}
          for project proposals.
        </span>
      </div>
    </main>
  );
};

export default HomePage;
