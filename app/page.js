import Gallery from "@/components/home/Gallery";
import SectionDefaultLayout from "@/components/layout/SectionDefaultLayout";
import Heading1 from "@/components/layout/typography/Heading1";
import Heading3 from "@/components/layout/typography/Heading3";
import Heading4 from "@/components/layout/typography/Heading4";
import Ingress from "@/components/layout/typography/Ingress";
import Paragraph from "@/components/layout/typography/Paragraph";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <SectionDefaultLayout>
        <div className='w-full'>
          <div className='flex flex-col text-center'>
            <Heading1 className='uppercase' text='Walk with impact' />
            <Paragraph
              className='text-sm sm:text-lg md:text-xl lg:text-2xl mt-4'
              text='Streetwear med en intensjon'
            />
          </div>
          <div className='flex text-center justify-between mt-20'>
            <div className='w-1/4 '>
              <div className='relative w-full h-16 md:h-20'>
                <Image
                  alt=''
                  src='/imgs/plant_icon.png'
                  fill
                  objectFit='contain'
                />
              </div>
              <Heading4 className='uppercase mt-8' text='Etisk produsert' />
            </div>
            <div className='w-1/4'>
              <div className='relative w-full h-16 md:h-20'>
                <Image
                  alt=''
                  fill
                  objectFit='contain'
                  src='/imgs/heart_icon.png'
                />
              </div>
              <Heading4
                className='uppercase mt-8'
                text='Overskudd til veldedighet'
              />
            </div>
            <div className='w-1/4'>
              <div className='relative w-full h-16 md:h-20'>
                <Image
                  alt=''
                  fill
                  objectFit='contain'
                  src='/imgs/humans_icon.png'
                />
              </div>
              <Heading4 className='uppercase mt-8' text='Inspirere' />
            </div>
          </div>
          <div className='flex justify-center mt-20'>
            <MdKeyboardArrowDown className='text-5xl' />
          </div>
        </div>
      </SectionDefaultLayout>
      <Gallery />
      <SectionDefaultLayout className='h-screen bg-impact-green flex items-center justify-center'>
        <div className='w-full flex justify-between mb-20 text-impact-white'>
          <div className='w-full md:w-2/5'>
            <Ingress
              className='mb-12'
              text='WalkWithImpact er et norskt streetware brand - som tilrettelegger
              for at enkeltpersoner og bedrifter kan spre subtil bevissthet, og
              samtidig bidra med finansiell støtte, til ideelle formål som
              jobber for en bedre verden.'
            />

            <Paragraph
              className='mb-6'
              text='51% av selskapets overskudd går uavkortet til WalkWithImpact
              stiftelsen. Les mer HER'
            />

            <Paragraph
              className='mb-6'
              text='Om kort tid, vil plattformen tilrettelegge for at flere ideelle
              grassroot organisasjoner kan skape sin egen inntektskilde - utover
              tradisjonelle donasjoner, på en etisk, bærekraftig og
              kostnadseffektiv måte'
            />

            <Paragraph
              className='mb-6'
              text='Kombiner hverdags komfor med en god sak?'
            />
            <button className='border-impact-white border-2 w-80 rounded-sm gap-2 py-2'>
              Se kolleksjon
            </button>
          </div>
          <div className='w-full md:w-2/5'>
            <Heading3 className='uppercase mb-3' text='Digital passport' />
            <p className='mb-6'>
              Som et retail selskap har vi satt som minimumskrav å kunne vise
              til etisk og bærekraftig produksjon. Sammen med vår partner har vi
              tett samarbeid med Unisot rundt “digitale passport” - som bidrar
              med en transparent oversikt over hele produksjonen.
            </p>
            <Heading3
              className='uppercase mb-3'
              text='Lokale samarbeid - limited editions'
            />

            <p className='mb-6'>
              Vi samarbeider med relevante skribenter og kreative kunstnere /
              illustratører - når det kommer til de kreative uttrykkene på
              kommende kolleksjonener.
            </p>
            <Heading3
              className='uppercase mb-3'
              text='Transparent forretningsmodel'
            />
            <p className='mb-6'>
              Vi har tro på full åpenhet overfor kunder, samarbeidspartnere og
              andre bidragsytere - som en del av vår forretnings filosofi.
              Ingenting er perfekt og ting tar tid. Samtidig, har vi tro på at
              åpenhet tiltrekker de riktige relasjonene og gir best grunnlag for
              forbedring.
            </p>
          </div>
        </div>
      </SectionDefaultLayout>
    </main>
  );
}
