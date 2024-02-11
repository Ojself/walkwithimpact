"use client";
import React, { useState } from "react";
import Heading2 from "../layout/typography/Heading2";
import Paragraph from "../layout/typography/Paragraph";
import Heading3 from "../layout/typography/Heading3";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ParagraphBold from "../layout/typography/ParagraphBold";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductInformation = ({
  title,
  organisation = "",
  profitReceiver = "",
  author = "",
  illustrator = "",
  sizes,
  price,

  type = "",
  origin = "",
  producer = "",
  material = "",
  energyConsumption = "",
  blackChainTimeStamp = "",
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div className='w-full sm:w-1/3 md:w-1/4 flex flex-col justify-between'>
      <Heading2 className='uppercase mb-6' text={title} />

      <Paragraph
        className='mb-1'
        text={`Hva går overskuddet til: ${profitReceiver}`}
      />
      <Paragraph className='mb-1' text={`Skribent: ${author}`} />
      <Paragraph className='mb-1' text={`Illustratør: ${illustrator}`} />
      <Accordion className='border-0'>
        <AccordionItem className='border-b border-t my-2 border-impact-green'>
          <AccordionItemHeading>
            <AccordionItemButton className='bg-transparent mb-0'>
              <ParagraphBold
                className='inline mb-0 '
                text={"Produkt info"}
                iconRight={<MdKeyboardArrowDown className='text-xl inline' />}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Paragraph className='mb-1' text={`Produkt type: ${type}`} />
            <Paragraph className='mb-1' text={`Opprinnelsessted: ${origin}`} />
            <Paragraph className='mb-1' text={`Produsent: ${producer}`} />
            <Paragraph
              className='mb-1'
              text={`Stoffsammensetning: ${material}`}
            />
            <Paragraph
              className='mb-1'
              text={`Energiforbruk: ${energyConsumption}`}
            />
            <Paragraph
              className='mb-1'
              text={`Blackchain tidsstempel: ${blackChainTimeStamp}`}
            />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Paragraph
        className='mb-1'
        text={`Ideel organisasjon: ${organisation}`}
      />

      <div className='flex w-full justify-between'>
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          const fontSize = isSelected ? "font-bold" : "";
          return (
            <div
              key={size}
              className='border-2 border-black w-1/6 pb-[16%] relative my-4'
            >
              <button
                onClick={() => setSelectedSize(size)}
                className={`${fontSize} absolute top-0 left-0 bottom-0 right-0 text-center flex items-center justify-center uppercase cursor-pointer`}
              >
                {size}
              </button>
            </div>
          );
        })}
      </div>
      <Heading3 className='my-2' text={`Pris: ${price} NOK`} />
      <button className='border-impact-green border-2 w-full rounded-sm gap-2 py-2'>
        Send bestilling
      </button>
    </div>
  );
};

export default ProductInformation;
