"use client";
import Image from "next/image";
import { useState } from "react";

export const BioOfMember = ({ tabOfSrc }) => {
  // Utilisez un tableau d'états pour stocker l'état de chaque élément
  const [isOpenArray, setIsOpenArray] = useState(tabOfSrc.map(() => false));

  const toggleOpen = (index) => {
    const newIsOpenArray = isOpenArray.map((isOpen, i) =>
      i === index ? !isOpen : isOpen
    );
    setIsOpenArray(newIsOpenArray);
  };

  return (
    <div className="flex justify-around w-full flex-wrap">
      {tabOfSrc.map((src: string, index: number) => {
        return (
          <div key={index}>
            {isOpenArray[index] ? (
              <div>
                {index === 0 && (
                  <p
                    className=" absolute w-52 z-10 backdrop-blur-md text-white h-52 pt-12 pb-12 pl-5 pr-5"
                    onClick={() => toggleOpen(index)}
                  >
                    guitariste / compositeur du groupe
                  </p>
                )}
                {index === 1 && (
                  <p
                    className=" absolute w-52 z-10 backdrop-blur-md text-white h-52 pt-12 pb-12 pl-5 pr-5"
                    onClick={() => toggleOpen(index)}
                  >
                    batteur du groupe
                  </p>
                )}
                {index === 2 && (
                  <p
                    className=" absolute w-52 z-10 backdrop-blur-md text-white h-52 pt-12 pb-12 pl-5 pr-5"
                    onClick={() => toggleOpen(index)}
                  >
                    bassiste du groupe
                  </p>
                )}
                <Image
                  src={src}
                  alt="image musicien"
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-52 h-52"
                ></Image>
              </div>
            ) : (
              <Image
                src={src}
                alt="image musicien"
                width={200}
                height={200}
                className="rounded-md object-cover w-52 h-52"
                onClick={() => toggleOpen(index)}
              ></Image>
            )}
          </div>
        );
      })}
    </div>
  );
};
