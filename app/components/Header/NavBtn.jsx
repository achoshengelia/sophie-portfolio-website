'use client';
import React from 'react';
import clsx from 'clsx';
import useGlobalStore from '@/stores/global';

const NavBtn = () => {
  const { showMenu, handleToggleMenu } = useGlobalStore();

  return (
    <button className="flex items-center justify-center gap-[5rem]" onClick={handleToggleMenu}>
      {[1, 2, 3].map(i => (
        <span
          key={i}
          className={clsx('h-[22rem] w-[22rem] rounded-[50%] border-[2rem] border-purple', {
            'bg-black': showMenu,
            'bg-light-grey': !showMenu
          })}
        />
      ))}
    </button>
  );
};

export default NavBtn;
