'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useGlobalStore from '@stores/global';

const Menu = () => {
  const { showMenu } = useGlobalStore();

  return (
    <nav
      className={clsx(
        `flex-row-center fixed inset-0 bg-grey z-10 transition-opacity ${
          showMenu ? 'show' : 'hide'
        }`
      )}
    >
      <ul className="flex-col-center">
        {navItems.map(({ name, link, secondary }) => (
          <li
            key={name}
            className={clsx('font-[400]', {
              uppercase: !secondary,
              lowercase: secondary,
              'text-[40rem]': !secondary,
              'text-[26rem]': secondary
            })}
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

const navItems = [
  {
    name: 'illustration',
    link: '#'
  },
  {
    name: 'design',
    link: '#'
  },
  {
    name: 'tattoo',
    link: '#'
  },
  {
    name: 'about me',
    link: '#'
  },
  {
    name: 'shop',
    link: '#'
  },
  {
    name: 'contact',
    link: '#',
    secondary: true
  },
  {
    name: 'instagram',
    link: '#',
    secondary: true
  }
];
