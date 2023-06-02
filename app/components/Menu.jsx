'use client';
import React from 'react';
import useGlobalStore from '@/stores/global';
import Link from 'next/link';
import Row from './Row';
import Column from './Column';

const Menu = () => {
  const { showMenu } = useGlobalStore();

  return (
    <Row
      as="nav"
      className={`justify-center fixed inset-0 bg-grey z-10] ${showMenu ? '' : 'hidden'}`}
    >
      <Column as="ul" className="items-center">
        {navItems.map(({ name, link, secondary }) => (
          <li
            key={name}
            className={`
              text-[${secondary ? '26rem' : '45rem'}] 
              font-[400] 
              ${secondary ? 'lowercase' : 'uppercase'}`}
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
