'use client';
import React from 'react';
import clsx from 'clsx';
import useGlobalStore from '@stores/global';

const NavBtn = () => {
  const { showMenu, handleToggleMenu } = useGlobalStore();

  return (
    <button className="flex items-center justify-center gap-[5px] group" onClick={handleToggleMenu}>
      {[1, 2, 3].map(i => (
        <span
          key={i}
          className={clsx(
            `h-[14px] w-[14px] rounded-[50%] border-[1px] border-purple group-hover:drop-shadow-menubutton transition-colors 
            ${showMenu ? 'bg-black' : 'bg-light-grey'} sm:h-[22px] sm:w-[22px]`
          )}
        />
      ))}
    </button>
  );
};

export default NavBtn;
