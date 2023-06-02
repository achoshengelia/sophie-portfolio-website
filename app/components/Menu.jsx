'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useGlobalStore from '@/stores/global';
import Row from './Row';
import Column from './Column';

const Menu = () => {
  const { showMenu } = useGlobalStore();

  return (
    <Row
      as="nav"
      className={clsx('justify-center fixed inset-0 bg-grey z-10', { hidden: !showMenu })}
    >
      <Column as="ul" className="items-center">
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
      </Column>
    </Row>
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
