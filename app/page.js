import Gallery from "@/components/home/Gallery";
import SectionDefaultLayout from "@/components/layout/SectionDefaultLayout";
import Heading1 from "@/components/layout/typography/Heading1";
import Heading3 from "@/components/layout/typography/Heading3";
import Paragraph from "@/components/layout/typography/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <SectionDefaultLayout>
        <div>
          <div>
            <Image
              width={961}
              height={641}
              src='/imgs/models_tee.png'
              alt='Models with white tee shirts'
            />
          </div>

          <div className='flex flex-col'>
            <Heading1
              className='uppercase mt-4'
              text='Walk with impact - vinter kolleksjon'
            />
            <div className='flex justify-end'>
              <Paragraph text='Streetwear -' />
              <Paragraph
                className='ml-1'
                italic={true}
                text='med en intensjon'
              />
            </div>
          </div>
        </div>
      </SectionDefaultLayout>
      <Gallery />
      <SectionDefaultLayout className='bg-blob-green-light h-screen  flex items-center justify-center'>
        <div className='flex justify-between w-full md:w-2/3 lg:w-1/2'>
          <div className='w-full md:w-2/5'>
            <p className='mb-12'>
              WalkWithImpact er et norskt streetware brand - som tilrettelegger
              for at enkeltpersoner og bedrifter kan spre subtil bevissthet, og
              samtidig bidra med finansiell støtte, til ideelle formål med fokus
              på FNs bærekraftsmål.
            </p>
            <p className='mb-6'>
              51% av selskapets overskudd går uavkortet til WalkWithImpact
              stiftelsen. Les mer HER
            </p>
            <p className='mb-6'>
              Om kort tid, vil plattformen tilrettelegge for at flere ideelle
              grassroot organisasjoner kan skape sin egen inntektskilde - utover
              tradisjonelle donasjoner, på en etisk, bærekraftig og
              kostnadseffektiv måte
            </p>

            <p className='mb-6'>Kombiner hverdags komfor med en god sak?</p>
            <button className='border-impact-green border-2 w-80 rounded-sm gap-2 py-2'>
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
