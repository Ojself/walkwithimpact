"use client";
import React, { useRef } from "react";
import Heading2 from "@/components/layout/typography/Heading2";
import Heading3 from "@/components/layout/typography/Heading3";
import Paragraph from "@/components/layout/typography/Paragraph";
import ParagraphBold from "@/components/layout/typography/ParagraphBold";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import SubParagraph from "@/components/layout/typography/SmallText";

const faqs = [
  {
    q: "HVORFOR ER IKKE STIFTELSEN ETABLERT?",
    a: "any answer",
  },
  {
    q: "HVORDAN VIL OVERSKUDDET FORVALTES?",
    a: "any answer",
  },
  {
    q: "NÅR VIL DERE STARTE ARBEIDET I STIFTELSEN?",
    a: "any answer",
  },
  {
    q: "VIL DERE MÅLE DEN FAKTISKE EFFEKTEN AV ARBEIDET I STIFTELSEN?",
    a: "any answer",
  },
  {
    q: "HVORDAN VIL DERE JOBBE FOR Å REDUSERE KLASSISK OVERHEAD?",
    a: "any answer",
  },
  {
    q: "JEG KJENNER NOEN SOM KUNNE HATT BEHOV FOR DENNE TJENESTEN. HVA GJØR JEG?",
    a: "any answer",
  },
  {
    q: "JEG REPRESENTERER EN IDEEL ORGANISASJON OG ØNSKER SAMARBEID",
    a: "any answer",
  },
  {
    q: "JEG HAR LYST TIL Å BIDRA PÅ KORT ELLER LANG SIKT",
    a: "any answer",
  },
  {
    q: "JEG TRENGER IKKE FLERE KLÆR, MEN ØNSKER Å STØTTE ØKONOMISK",
    a: "any answer",
  },
  {
    q: "NÅR VIL DET KOMME ANDRE IDEELLE FORMÅL MAN KAN STØTTE?",
    a: "any answer",
  },
];

const images = [
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
  { src: "/imgs/profile_tormod.png", alt: "/profile picture Tormod" },
];

const VartArbeid = () => {
  const visjonRef = useRef(null);
  const forretningsModellRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  const handleNavigationClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main className='flex flex-col items-end '>
      <section
        ref={visjonRef}
        className='w-full md:w-2/3 py-20 md:py-28  h-[650px]'
      >
        <div className='w-full relative h-full'>
          <Image
            alt='Tee shirts logo'
            fill
            objectFit='contain'
            src='/imgs/clothing_hero.jpeg'
          />
        </div>
      </section>
      {/* <section className='w-full md:w-2/3 py-20 md:py-28 '>
        <div className='h-20'>
          <Image
            alt='Tee shirts logo'
            fill
            objectFit='contain'
            src='/imgs/model_back_tee_white.png'
          />
        </div>
      </section> */}
      <section
        ref={forretningsModellRef}
        className='w-full md:w-2/3 py-20 md:py-28 '
      >
        <Heading2 text='Forretningsmodell' />
        <Paragraph text='Ingen er perfekte og ting tar tid. Samtidig, har vi troen på at åpenhet skaper de beste forutsetningen for forbedringer og tilrettelegger for bærekraftig samarbeid både eksternt og internt. ' />
        <Paragraph text='Her ser dere en ganske nøyaktig oversikt over hvordan midler forvaltes i forbindelse med “Limited edition - Vinter kolleksjon”.' />
        <Paragraph text='Vi er kanskje litt radikale og har ingen tradisjonelle lønnskostnader i selskapet. Dette innebærer ofte høy risiko under en oppstart, og sammen med aktive bidragsytere, har vi en “penger inn, penger ut” model for å kunne bygge selskapet sten for sten. ' />
        <ParagraphBold
          className='uppercase'
          text='Inntekter ved 90% utsolgt kolleksjon'
        />
        <Paragraph className='text-impact-green' text='Ca 460 000 NOK' />
        <ParagraphBold className='uppercase' text='Leverandør' />
        <Paragraph className='text-impact-green' text='Ca 140 000 NOK' />
        <ParagraphBold className='uppercase' text='Kickback bidragsytere' />
        <Paragraph className='text-impact-green' text='Ca 90 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='51% overskudd uavkortet til stiftelse'
        />
        <Paragraph className='text-impact-green' text='Ca 60 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='49% overskudd - drift og videreutvikling'
        />
        <Paragraph className='text-impact-green' text='Ca 60 000 NOK' />
        <Heading3 className='uppercase' text='Stiftelsen' />
        <ParagraphBold
          className='uppercase'
          text='Innsamlet per - 90% utsolgt kleskolleksjon'
        />
        <Paragraph className='text-impact-green' text='60 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='Snitt støtte per - godkjent søknad'
        />
        <Paragraph className='text-impact-green' text='5000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='Personer støttet - per kleskolleksjon'
        />
        <Paragraph className='text-impact-green' text='10 personer' />
        <ParagraphBold
          className='uppercase'
          text='Positive samfunnsmessige ringevirkninger?'
        />
        <Paragraph
          className='text-impact-green'
          text='Håper på samarbeid med forskningsrådet'
        />
        <ParagraphBold className='uppercase' text='Driftskostnad år 1' />
        <Paragraph className='text-impact-green' text='15 000 NOK' />
        <ParagraphBold className='uppercase' text='Admin og lønnskostnader' />
        <Paragraph className='text-impact-green' text='0 NOK' />
        <ParagraphBold className='uppercase' text='Styrehonorarer' />
        <Paragraph className='text-impact-green' text='0 NOK' />
      </section>
      <section ref={teamRef} className='w-full md:w-2/3 py-20 md:py-28 '>
        <Heading2 text='Team' />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 '>
          {images.map((image) => (
            <div
              key={image.src}
              className='relative overflow-hidden aspect-ratio-square pb-80 '
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='inset-0 object-contain object-left'
              />
            </div>
          ))}
        </div>
      </section>
      <section ref={faqRef} className='w-full md:w-2/3 py-20 md:py-28 '>
        <div>
          <Accordion className='border-0'>
            {faqs.map((faq) => {
              return (
                <AccordionItem
                  className='mb-8 border-b border-impact-black'
                  key={faq.q}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <Paragraph className='inline' text={faq.q} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <SubParagraph text={faq.a} />
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
      <div className='flex flex-col fixed left-4 top-40'>
        <button
          className='flex'
          onClick={() => {
            handleNavigationClick(visjonRef);
          }}
        >
          <Heading3 className='uppercase mb-2 underline' text='Visjon' />
        </button>
        <button
          className='flex'
          onClick={() => {
            handleNavigationClick(forretningsModellRef);
          }}
        >
          <Heading3
            className='uppercase mb-2 underline'
            text='Forretningsmodell'
          />
        </button>
        <button
          className='flex'
          onClick={() => {
            handleNavigationClick(teamRef);
          }}
        >
          <Heading3 className='uppercase mb-2 underline' text='Team' />
        </button>
        <button
          className='flex'
          onClick={() => {
            handleNavigationClick(faqRef);
          }}
        >
          <Heading3 className='uppercase mb-2 underline' text='Faq' />
        </button>
      </div>
    </main>
  );
};

export default VartArbeid;
