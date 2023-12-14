import Heading1 from "@/components/layout/typography/Heading1";
import Heading2 from "@/components/layout/typography/Heading2";
import Heading3 from "@/components/layout/typography/Heading3";
import Paragraph from "@/components/layout/typography/Paragraph";
import Image from "next/image";
import React from "react";

const Stiftelsen = () => {
  return (
    <main>
      <section className='relative w-auto h-[650px]'>
        <Image
          alt='Tee shirts logo'
          fill
          objectFit='cover'
          src='/imgs/tees_hero.jpeg'
        />
      </section>
      <section className='flex justify-center items-center h-[340px]'>
        <div className='text-center w-full sm:w-3/4 md:w-1/2'>
          <Heading1 className='uppercase mb-6' text='Stiftelsen' />
          <Paragraph text='Stiftelsen bistår unge mennesker med tilbakefall fra tradisjonell terapi - med bl.a økonomisk støtte inn mot forebyggende og litt annerledes behandlingsformer.  ' />
        </div>
      </section>
      <section className='flex justify-center '>
        <div className='flex items-center justify-between'>
          <div className='w-2/5 flex flex-col'>
            <Heading2
              className='uppercase mb-20'
              text='Vår felles utfordring?'
            />
            <Paragraph
              className='mb-20'
              text='Psykiske lidelser koster Norge rundt 330 milliarder kroner hvert år i form av årlige trygdeutgifter, behandlingsutgifter og sosialutgifter'
            />
            <Paragraph
              className='mb-20'
              text='I Europa rammes ca 1.5 av 10 personer av behandlingstrengende depresjon gjennom livet. Rammes du av en alvorlig depresjon begynner den vanligvis i 20 - 30 års alderen.'
            />
            <Paragraph
              className='mb-20'
              text='Depresjon kommer tilbake hos omtrent en tredjedel av pasientene innen 1 år etter avsluttet behandling'
            />
          </div>
          <div className='relative w-2/5 h-[800px]'>
            <Image
              alt='Tee shirt blue'
              fill
              objectFit='contain'
              src='/imgs/model_back_left_tee_blue.png'
            />
          </div>
        </div>
      </section>
      <section className='flex justify-center border-green-500 border-2'>
        <div className='flex items-center justify-between border-red-500 border-2'>
          <div className='flex flex-col w-2/5'>
            <Heading3 text='Trenger noe info her om hva dette er. Er dette løsningen?:' />
            <Heading3 text='-kan søke støtte til : ' />
          </div>
          <div className='flex flex-col w-2/5'>
            <Heading3 className='uppercase' text='Traumekunst' />
            <Heading3 className='uppercase' text='Personlig trener' />
            <Heading3 className='uppercase' text='Somatisk terapi' />
            <Heading3 className='uppercase' text='Selvhjelpspakker' />
            <Heading3 className='uppercase' text='Coaching' />
            <Heading3 className='uppercase' text='Danseterapi' />
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center bg-impact-green h-[530px]'>
        <div className='flex flex-col items-center text-impact-white'>
          <Heading2 className='uppercase mb-6' text='Bli med på pilot' />
          <Heading3 className='mb-6' text='Starter Q2 2024' />
          <button className='border-impact-white border-2 w-80 rounded-sm gap-2 py-2'>
            Ta kontakt
          </button>
        </div>
      </section>
    </main>
  );
};

export default Stiftelsen;
