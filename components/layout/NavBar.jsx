"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navs = ["stiftelsen", "kolleksjon", "vårt arbeid", "partnere"];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex p-8'>
      <Link href='/'>
        <div className='flex h-[70px] h- w-[170px]'>
          <div className='w-1/2 relative'>
            <Image
              alt='Walk With Impact logo'
              fill
              src='/imgs/wwi_logo_green.png'
            />
          </div>
          <div className='w-1/2 relative'>
            <Image
              alt='Walk With Impact logo'
              fill
              className='ml-6'
              src='/imgs/wwi_logo_trans_text_col.png  '
            />
          </div>
        </div>
      </Link>
      <div className='w-full justify-around flex items-center'>
        {navs.map((nav) => {
          const formattedNav = nav.toLowerCase().replace(" ", "-");
          console.log(pathname);
          const isActive = pathname === `/${formattedNav}`;
          return (
            <Link
              key={nav}
              href={`/${formattedNav}`}
              className={`
                ${
                  !isActive ? "underline" : ""
                } " underline-offset-8 uppercase  "
              `}
            >
              {nav}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
