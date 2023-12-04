"use client";
import React from "react";
import Heading2 from "../layout/typography/Heading2";
import Heading3 from "../layout/typography/Heading3";
import Image from "next/image";

const images = [
  {
    original: "/imgs/model_back_left_tee.png",
  },
  {
    original: "/imgs/model_back_right_tee.png",
  },
  {
    original: "/imgs/model_back_right_tee_green.png",
  },
];

const Gallery = () => {
  return (
    <section className='mx-40 mt-20'>
      <Heading2
        className='uppercase text-center'
        text='Komfortabelt, trendy & etisk'
      />
      <div className='flex justify-between mt-20'>
        {images.map((image) => {
          return (
            <div className='relative flex justify-center' key={image.original}>
              <Image alt='text' width={331} height={574} src={image.original} />
              <button className='absolute bottom-0 w-full bg-[#C4C4C4] h-14 '>
                SE MER
              </button>
            </div>
          );
        })}
      </div>
      <div className='uppercase flex mt-20'>
        <Heading3 text='Kunst: Jenny Hviding' />
        <Heading3 className='ml-4' text='Tekst: Pia Von Hirsch' />
      </div>
    </section>
  );
};

export default Gallery;
