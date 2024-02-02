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
import Heading5 from "@/components/layout/typography/Heading5";
import Heading1 from "@/components/layout/typography/Heading1";

const faqs = [
  {
    q: "JEG REPRESENTERER EN IDEELL ORGANISASJON OG ØNSKER SAMARBEID?",
    a: "any answer",
  },
  {
    q: "NÅR VIL DET KOMME ANDRE IDEELLE FORMÅL MAN KAN STØTTE?",
    a: "any answer",
  },
  {
    q: "HVORDAN VELGER DERE UT IDEELLE ORGANISASJONER?",
    a: "any answer",
  },
  {
    q: "HVORDAN SIKRER DERE AT OVERSKUDDET/STØTTEN FORVALTES EFFEKTIVT?",
    a: "any answer",
  },
  {
    q: "HVORFOR HAR DERE OGSÅ EN EGEN STIFTELSE?",
    a: "any answer",
  },
  {
    q: "JEG ER SKRIBENT, GRAFISK DESIGNER ELLER ILLUSTRATØR OG ØNSKER SAMARBEID?",
    a: "any answer",
  },
  {
    q: "ER WALKWITHIMPACT EN IDEELL ORGANISASJON?",
    a: "any answer",
  },
  {
    q: "HVORDAN FÅR DERE DETTE TIL Å FUNGERER ØKONOMISK?",
    a: "any answer",
  },
  {
    q: "KAN JEG DONERE PENGER DIREKTE TIL WALKWITHIMPACT?",
    a: "any answer",
  },
  {
    q: "ER DET MULIG Å BIDRA SOM EN DEL AV TEAMET?",
    a: "any answer",
  },
];

const images = [
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Hilde Vanvik",
    title: "Communication",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Pia Von Hirsch",
    title: "Social media",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Lynette Aglen",
    title: "Desinger",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Line Stolen Wilberg",
    title: "Operations",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Jonathan Pirolt",
    title: "Graphic design",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Ken Oishi",
    title: "Finance",
  },
  {
    src: "/imgs/profile_tormod.png",
    alt: "/profile picture Tormod",
    name: "Joakim Brur Engen Johannessen",
    title: "Founder, CEO",
  },
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
      <section ref={visjonRef} className='w-full md:w-2/3 px-2 h-[650px]'>
        <div className='w-full relative h-full'>
          <Image
            alt='Tee shirts logo'
            fill
            objectFit='cover'
            src='/imgs/clothing_hero.jpeg'
          />
        </div>
      </section>
      <section ref={visjonRef} className='w-full md:w-2/3 py-20 md:py-28 px-2'>
        <Heading1 className='uppercase text-center mt-10' text='Vårt arbeid' />
      </section>
      <section className='bg-blob-green-light before:h-[100%] before:w-[190%] md:before:w-[130%] lg:before:w-[90%] min-h-screen w-full md:w-2/3 flex items-center justify-center px-2'>
        <div className='flex flex-col w w-4/5 md:w-2/3 lg:w-1/2'>
          <Heading2 className='uppercase mb-3' text='Vår visjon' />
          <Paragraph
            className='mb-6'
            text='Vi har flere personlige grunner for opprettelsen av WalkWithImpact AS og WalkWithImpact Stiftelsen.'
          />
          <Paragraph
            className='mb-6'
            text='Første - er å bidra positiv på en medmenneskelig samfunnsutfordring - som flere av oss har en personlig relasjon til. Enten direkte eller indirekte. '
          />
          <Paragraph
            className='mb-6'
            text='Andre - er å kunne bidra positivt ved å skape våre egne funds, uten å måtte be om donasjoner fra andre.'
          />
          <Paragraph
            className='mb-6'
            text='Tredje - er å kunne vise transparent forvaltning av “raised funds” for å redusere “overhead” og effektivisere “ROI” for hver krone skapt.'
          />
        </div>
      </section>
      <section
        ref={forretningsModellRef}
        className='w-full md:w-2/3 py-20 md:py-28 px-2'
      >
        <Heading2 className='uppercase mb-6' text='Forretningsmodell' />
        <Paragraph
          className='mb-6'
          text='Ingen er perfekte og ting tar tid. Samtidig, har vi troen på at åpenhet skaper de beste forutsetningen for forbedringer og tilrettelegger for bærekraftig samarbeid både eksternt og internt. '
        />
        <Paragraph
          className='mb-6'
          text='Her ser dere en ganske nøyaktig oversikt over hvordan midler forvaltes i forbindelse med “Limited edition - Vinter kolleksjon”.'
        />
        <Paragraph
          className='mb-6'
          text='Vi er kanskje litt radikale og har ingen tradisjonelle lønnskostnader i selskapet. Dette innebærer ofte høy risiko under en oppstart, og sammen med aktive bidragsytere, har vi en “penger inn, penger ut” model for å kunne bygge selskapet sten for sten. '
        />
        <ParagraphBold
          className='uppercase'
          text='Inntekter ved 90% utsolgt kolleksjon'
        />
        <Paragraph className='text-impact-green mb-6' text='Ca 460 000 NOK' />
        <ParagraphBold className='uppercase' text='Leverandør' />
        <Paragraph className='text-impact-green mb-6' text='Ca 140 000 NOK' />
        <ParagraphBold className='uppercase' text='Kickback bidragsytere' />
        <Paragraph className='text-impact-green mb-6' text='Ca 90 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='51% overskudd uavkortet til stiftelse'
        />
        <Paragraph className='text-impact-green mb-6' text='Ca 60 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='49% overskudd - drift og videreutvikling'
        />
        <Paragraph className='text-impact-green mb-6' text='Ca 60 000 NOK' />
      </section>
      <section className='w-full md:w-2/3 py-20 md:py-28 px-2'>
        <Heading3 className='uppercase mb-6' text='Stiftelsen' />
        <ParagraphBold
          className='uppercase'
          text='Innsamlet per - 90% utsolgt kleskolleksjon'
        />
        <Paragraph className='text-impact-green mb-6' text='60 000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='Snitt støtte per - godkjent søknad'
        />
        <Paragraph className='text-impact-green mb-6' text='5000 NOK' />
        <ParagraphBold
          className='uppercase'
          text='Personer støttet - per kleskolleksjon'
        />
        <Paragraph className='text-impact-green mb-6' text='10 personer' />
        <ParagraphBold
          className='uppercase'
          text='Positive samfunnsmessige ringevirkninger?'
        />
        <Paragraph
          className='text-impact-green mb-6'
          text='Håper på samarbeid med forskningsrådet'
        />
        <ParagraphBold className='uppercase' text='Driftskostnad år 1' />
        <Paragraph className='text-impact-green mb-6' text='15 000 NOK' />
        <ParagraphBold className='uppercase' text='Admin og lønnskostnader' />
        <Paragraph className='text-impact-green mb-6' text='0 NOK' />
        <ParagraphBold className='uppercase' text='Styrehonorarer' />
        <Paragraph className='text-impact-green mb-6' text='0 NOK' />
      </section>
      <section ref={teamRef} className='w-full md:w-2/3 py-20 md:py-28 px-2'>
        <Heading2 className='mb-6' text='WALKWITHIMPACT TEAM' />
        <Paragraph
          className='mb-6'
          text='En litta gjeng som synes det er hyggelig å bruke litt av tiden sin på å bidra til gode saker. Alle har dette som en aktiv hobby i dag, og håper det over tid kan utvikle seg til å bli mer aktivt. Ting tar tid, og vi har det gøy på reisen!'
        />
        <Paragraph className='mb-6' text='Lyst til å hjelpe til?' />

        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 '>
          {images.map((image) => {
            const { src, alt, name, title } = image;
            return (
              <div key={src}>
                <div className='relative overflow-hidden aspect-ratio-square pb-80 '>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className='inset-0 object-contain object-left'
                  />
                </div>
                <Heading5 text={name} />
                <ParagraphBold text={title} />
              </div>
            );
          })}
        </div>
      </section>
      <section
        ref={faqRef}
        className='px-2 md:px-10 w-full md:w-2/3 py-20 md:py-28 '
      >
        <div>
          <Heading2 className='uppercase mb-4 pl-2' text='Faq' />
          <Accordion className='border-0'>
            {faqs.map((faq) => {
              return (
                <AccordionItem
                  className='border-b border-impact-green mb-0 py-4'
                  key={faq.q}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='bg-transparent mb-0'>
                      <Paragraph className='inline mb-0 pl-2' text={faq.q} />
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
      <div className='hidden md:flex flex-col fixed left-4 top-40'>
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
