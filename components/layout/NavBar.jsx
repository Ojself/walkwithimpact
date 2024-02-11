"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navs = [/* "stiftelsen", */ "kolleksjon", "vårt arbeid", "partnere"];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex p-8'>
      <div className='flex h-[70px] w-[170px] '>
        <Link className='w-full flex ' href='/'>
          <div className='w-1/2 relative'>
            <Image
              alt='Walk With Impact logo'
              objectFit='contain'
              src='/imgs/wwi_logo_green.png'
              fill
            />
          </div>
          <div className='ml-6 w-1/2 relative'>
            <Image
              alt='Walk With Impact logo'
              fill
              objectFit='contain'
              src='/imgs/wwi_logo_trans_text_col.png'
            />
          </div>
        </Link>
      </div>
      <div className='w-1/2 justify-between flex items-center m-auto'>
        {navs.map((nav) => {
          // should remove æ ø å

          const formattedNav = nav
            .toLowerCase()
            .replace(" ", "-")
            .replaceAll("æ", "ae")
            .replaceAll("ø", "o")
            .replaceAll("å", "a");
          const isActive = pathname === `/${formattedNav}`;
          return (
            <Link
              key={nav}
              href={`/${formattedNav}`}
              className={`
                ${
                  isActive ? "underline" : ""
                } " underline-offset-8 uppercase text-xs sm:text-sm md:text-base hover:underline cursor-pointer"
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
