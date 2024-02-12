"use client";
import Image from "next/image";
import { useState } from "react";

export const BioOfMember = ({ tabOfSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(tabOfSrc);

  return (
    <div className="flex justify-around w-full">
      {tabOfSrc.map((src: { src: string }, index: number) => {
        console.log(index);
        return (
          <div key={index}>
            {isOpen === true ? (
              <div>
                <Image
                  src={src}
                  alt="image musicien"
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-52 h-52"
                  onClick={() => setIsOpen(false)}
                ></Image>
                <p>Karlos est sympa</p>
              </div>
            ) : (
              <Image
                src={src}
                alt="image musicien"
                width={200}
                height={200}
                className="rounded-md object-cover w-52 h-52"
                onClick={() => setIsOpen(true)}
              ></Image>
            )}
          </div>
        );
      })}
    </div>
  );
};
