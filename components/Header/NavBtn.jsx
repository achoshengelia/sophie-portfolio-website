'use client';
import React from 'react';
import clsx from 'clsx';
import useGlobalStore from '@stores/global';

const NavBtn = () => {
  const { showMenu, handleToggleMenu } = useGlobalStore();

  return (
    <button className="flex items-center justify-center gap-[5px]" onClick={handleToggleMenu}>
      {[1, 2, 3].map(i => (
        <span
          key={i}
          className={clsx(
            `h-[22px] w-[22px] rounded-[50%] border-[2px] border-purple transition-colors 
            ${showMenu ? 'bg-black' : 'bg-light-grey'}`
          )}
        />
      ))}
    </button>
  );
};

export default NavBtn;
