import SectionDefaultLayout from "@/components/layout/SectionDefaultLayout";
import Heading1 from "@/components/layout/typography/Heading1";
import Heading2 from "@/components/layout/typography/Heading2";
import Paragraph from "@/components/layout/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main>
      <SectionDefaultLayout>
        <div className='h-[564px] flex flex-col justify-center items-center text-center'>
          <Heading1 className='uppercase mb-16' text='Partnere' />
          <Paragraph text='Vi er superduper stolte av å kunne jobbe med noen fantastiske produsenter som deler vår visjon for etisk og bærekraftig produksjon.' />
        </div>
      </SectionDefaultLayout>
      <SectionDefaultLayout>
        <div className='flex flex-col items-center'>
          <div className='w-11/12 flex justify-between mb-20'>
            <div className='w-2/3 '>
              <Heading2 className=' mb-6 uppercase' text='Unisot' />
              <Paragraph
                className='mb-6'
                text='UNISOT is a Software-as-a-Service (SaaS) providing solutions that can be used to track products from the first raw product producers – to logistics, production, distribution and all the way to the end consumer – preventing waste and unethical practices.'
              />
              <Link href='https://www.google.com'>
                <button className='border-impact-green border-2 w-80 rounded-sm gap-2 py-2'>
                  Besøk nettside
                </button>
              </Link>
            </div>
          </div>
          <div className='w-11/12 flex justify-between mb-20'>
            <div className='w-2/3 '>
              <Heading2 className='uppercase mb-6 ' text='Nordic Textile' />
              <Paragraph
                className='mb-6'
                text='At Nordic Textile, we weave transparency and trust into every stitch, ensuring high-quality garments with ethical values. We are here to foster sustainability, ethics, and a more harmonious balance between profitability and environmental impact. Our commitment to integrity and sustainability empowers conscious consumers in a fashion-forward future.'
              />
              <Link href='https://www.google.com'>
                <button className='border-impact-green border-2 w-80 rounded-sm gap-2 py-2'>
                  Besøk nettside
                </button>
              </Link>
            </div>
            <div className='relative w-1/4'>
              <Image
                alt='Nordic Textile logo'
                fill
                objectFit='contain'
                src='/imgs/nordic_textile_logo.png'
              />
            </div>
          </div>
          <div className='w-11/12 flex justify-between mb-20'>
            <div className='w-2/3 '>
              <Heading2 className='uppercase mb-6 ' text='Thianis Apparels' />
              <Paragraph
                className='mb-6'
                text='Thianis Apparels Ltd: World-class manufacturer of high-quality Mens and Ladies Wear in Asia. Committed to professionalism, perfection, and sustainability. Specializing in niche product lines for schools, workwear, airlines, hotels, and more. Experienced, diverse team and skilled workforce ensure excellent products.'
              />
              <Link href='https://www.google.com'>
                <button className='border-impact-green border-2 w-80 rounded-sm gap-2 py-2'>
                  Besøk nettside
                </button>
              </Link>
            </div>
            <div className='relative w-1/4'>
              <Image
                alt='Thianis Apparel logo'
                fill
                objectFit='contain'
                src='/imgs/thianis_apparel_logo.png'
              />
            </div>
          </div>
        </div>
      </SectionDefaultLayout>
    </main>
  );
};

export default Page;
