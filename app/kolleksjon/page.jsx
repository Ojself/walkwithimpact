import ProductInformation from "@/components/kolleksjon/ProductInformation";
import SectionDefaultLayout from "@/components/layout/SectionDefaultLayout";
import Heading1 from "@/components/layout/typography/Heading1";
import Heading2 from "@/components/layout/typography/Heading2";
import Heading3 from "@/components/layout/typography/Heading3";
import Heading4 from "@/components/layout/typography/Heading4";
import Paragraph from "@/components/layout/typography/Paragraph";
import Image from "next/image";
import React from "react";

const Kolleksjon = () => {
  return (
    <main>
      <section className='w-full h-[979px] flex relative bg-[#EDEDEB]'>
        <div className='w-fit absolute left-0 top-0 bottom-0 right-0 m-auto h-fit z-50 text-center p-4 rounded-md bg-blend-saturation'>
          <Heading1 className='uppercase mb-2' text='Vinter Kolleksjon' />
          <Heading3 className='uppercase mb-4' text='Limited edition' />
          <Heading4
            className='uppercase mb-12'
            text='Laget av Jenny Hviding & Pia Von Hirsch'
          />
          <button className=' border-impact-green uppercase border-2 w-80 rounded-sm gap-2 py-2'>
            Sign up for pre-sale
          </button>
        </div>
        <div className='w-[653px] relative ml-auto blur-lg sm:blur-md md:blur-sm lg:blur-none'>
          <Image
            alt='Tee shirts logo'
            fill
            objectFit='contain'
            src='/imgs/model_back_tee_white.png'
          />
        </div>
      </section>
      <SectionDefaultLayout className='flex-col'>
        <div>
          <Heading2 className='uppercase' text='T-shirt' />
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between md:items-start items-center h-[574px]'>
          <div className='h-full md:w-1/4 relative mb-2 md:mb-0'>
            <Image
              alt='Tee shirt'
              fill
              className='object-top h-[500px]'
              objectFit='contain'
              src='/imgs/model_back_left_tee.png'
            />
          </div>
          <div className='h-full md:w-1/4 relative mb-2 md:mb-0'>
            <Image
              alt='Tee shirt'
              fill
              className='object-top h-[500px]'
              objectFit='contain'
              src='/imgs/model_back_right_tee.png'
            />
          </div>
          <ProductInformation
            author='PIA VON HIRSCH'
            illustrator='JENNY HVIDING'
            title={"Møt oss selv"}
            price={990}
            sizes={["s", "m", "l", "xl"]}
          />
        </div>
      </SectionDefaultLayout>
      <SectionDefaultLayout>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div className='w-full min-h-[300px] md:w-1/4 relative'>
            <Image
              alt='Tee shirt'
              fill
              objectFit='contain'
              className='object-center md:object-left-top'
              src='/imgs/model_back_right_tee_green.png'
            />
          </div>
          <ProductInformation
            author='PIA VON HIRSCH'
            illustrator='JENNY HVIDING'
            title={"Nye stier"}
            price={990}
            sizes={["s", "m", "l", "xl"]}
          />
        </div>
      </SectionDefaultLayout>

      <SectionDefaultLayout>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div className='h-full md:w-1/4 relative mb-2 md:mb-0'>
            <Image
              alt='Tee shirt'
              fill
              className='object-top h-[500px]'
              objectFit='contain'
              src='/imgs/model_back_left_tee.png'
            />
          </div>
          <div className='h-full md:w-1/4 relative mb-2 md:mb-0'>
            <Image
              alt='Tee shirt'
              fill
              className='object-top h-[500px]'
              objectFit='contain'
              src='/imgs/model_back_right_tee.png'
            />
          </div>
          <ProductInformation
            author='PIA VON HIRSCH'
            illustrator='JENNY HVIDING'
            title={"Innsiden"}
            price={990}
            sizes={["s", "m", "l", "xl"]}
          />
        </div>
      </SectionDefaultLayout>
      <SectionDefaultLayout className='flex-col'>
        <div>
          <Heading2 className='uppercase mb-4' text='Jenny Hviding' />
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div className='flex flex-col w-full md:w-1/4'>
            <Heading4 className='uppercase mb-2' text='Nye stier' />
            <div className=' min-h-[300px]  relative'>
              <Image
                alt='Innsiden - Jenny Hviding'
                fill
                objectFit='contain'
                className='object-center md:object-left-top'
                src='/imgs/jenny_0.png'
              />
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/4'>
            <Heading4 className='uppercase mb-2' text='Nye stier' />
            <div className=' min-h-[300px]  relative'>
              <Image
                alt='Møt oss selv - Jenny Hviding'
                fill
                objectFit='contain'
                className='object-center md:object-left-top'
                src='/imgs/jenny_1.png'
              />
            </div>
          </div>

          <div className='flex flex-col w-full md:w-1/4'>
            <Heading4 className='uppercase mb-2' text='Nye stier' />
            <div className=' min-h-[300px]  relative'>
              <Image
                alt='Nye stier - Jenny Hviding'
                fill
                objectFit='contain'
                className='object-center md:object-left-top'
                src='/imgs/jenny_2.png'
              />
            </div>
          </div>
        </div>
      </SectionDefaultLayout>
      <SectionDefaultLayout>
        <div className='w-full'>
          <div>
            <Heading2 className='uppercase mb-4' text='Pia Von Hirsch' />
          </div>
          <div className='flex w-full justify-between'>
            <div className='w-full min-h-[300px] md:w-1/4 relative'>
              <div>
                <Heading4 className='uppercase mb-2' text='Innsiden' />
              </div>
              <div>
                <Paragraph
                  text='
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.'
                />
              </div>
            </div>
            <div className='w-full min-h-[300px] md:w-1/4 relative'>
              <div>
                <Heading4 className='uppercase mb-2' text='Møt oss selv' />
              </div>
              <div>
                <Paragraph
                  text='
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.'
                />
              </div>
            </div>
            <div className='w-full min-h-[300px] md:w-1/4 relative'>
              <div>
                <Heading4 className='uppercase mb-2' text='Nye Stier' />
              </div>
              <div>
                <Paragraph
                  text='
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionDefaultLayout>
    </main>
  );
};

export default Kolleksjon;
