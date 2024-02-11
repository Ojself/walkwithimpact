import Image from "next/image";
import React from "react";
import Heading4 from "./typography/Heading4";
import Paragraph from "./typography/Paragraph";

import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-impact-black text-impact-white p-20 flex flex-col justify-between min-h-[700px]'>
      <div className='w-full h-1/4'>
        <Image
          src='/imgs/wwi_logo_white_text.png'
          width={400}
          height={152}
          className='-translate-x-6'
          alt='Walk With Impact logo'
        />
        <div className='flex'>
          <Paragraph text='Streetwear -' />
          <Paragraph className='ml-1' text='med en intensjon' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between h-1/2'>
        <div className='flex flex-col lg:flex-row justify-between w-1/2'>
          <div>
            <Heading4 className='uppercase mb-5' text='Kolleksjon' />
            <Paragraph className='mb-2' text='Vinterkolleksjon' />
          </div>
          <div>
            <Heading4 className='uppercase mb-5' text='arbeid' />

            <Paragraph className='mb-2' text='Visjon & Team' />
            <Paragraph className='mb-2' text='Forretningsmodell' />
            <Paragraph className='mb-2' text='FAQ' />
          </div>
          <div>
            <Heading4 className='uppercase mb-5' text='Partnere' />

            <Paragraph className='mb-2' text='Nordic Textile' />
            <Paragraph className='mb-2' text='Thianis Apparels' />
            <Paragraph className='mb-2' text='Unisot' />
          </div>
        </div>
        <div>
          <Heading4 className='uppercase mb-5' text='Kontakt' />
          <Paragraph className='mb-2' text='Epost: joakim@walkwithimpact.no' />
          <Paragraph className='mb-2' text='Telefon: +47 95752185' />
          <Paragraph className='mb-2' text='Org.nummer: ' />
          <Paragraph
            className='mb-2'
            text='Adresse: Nordalveien 81, 0584 Oslo'
          />
        </div>
      </div>
      <div className='h-1/4'>
        <hr />
        <div className='flex justify-end mt-4 text-5xl'>
          <CiLinkedin className='mr-2' />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
