"use client";
import React, { useState } from "react";
import Heading2 from "../layout/typography/Heading2";
import Paragraph from "../layout/typography/Paragraph";
import Heading3 from "../layout/typography/Heading3";

const ProductInformation = ({
  title,
  type,
  origin,
  producer,
  material,
  energyConsumption,
  blackChainTimeStamp,
  sizes,
  price,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div className='w-full md:w-1/4 flex flex-col justify-between'>
      <Heading2 className='uppercase mb-6' text={title} />
      <Paragraph className='mb-1' text={`Produkt type: ${type}`} />
      <Paragraph className='mb-1' text={`Opprinnelsessted: ${origin}`} />
      <Paragraph className='mb-1' text={`Produsent: ${producer}`} />
      <Paragraph className='mb-1' text={`Stoffsammensetning: ${material}`} />
      <Paragraph
        className='mb-1'
        text={`Energiforbruk: ${energyConsumption}`}
      />
      <Paragraph
        className='mb-1'
        text={`Blackchain tidsstempel: ${blackChainTimeStamp}`}
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
      <button className='border-impact-green border-2 w-80 rounded-sm gap-2 py-2'>
        Send bestilling
      </button>
    </div>
  );
};

export default ProductInformation;
