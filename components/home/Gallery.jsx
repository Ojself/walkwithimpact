"use client";
import React from "react";
import Heading2 from "../layout/typography/Heading2";
import Image from "next/image";
import SectionDefaultLayout from "../layout/SectionDefaultLayout";

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
    <SectionDefaultLayout>
      <div className='flex flex-col w-full justify-between'>
        <Heading2
          className='uppercase text-center'
          text='Komfortabelt, trendy & etisk'
        />
        <div className='flex lg:flex-row flex-col items-center justify-between mt-20'>
          {images.map((image) => {
            return (
              <div
                className='relative flex justify-center w-[331px] h-[574px] mb-10 lg:mb-0'
                key={image.original}
              >
                <Image
                  alt='text'
                  fill
                  src={image.original}
                  className='object-center object-cover '
                />
                <button className='absolute bottom-0 w-full bg-impact-green text-white h-14 '>
                  SE MER
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </SectionDefaultLayout>
  );
};

export default Gallery;
