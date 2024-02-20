import logo from "@/assets/logo_v2.png";
// image groupe
import charles from "@/assets/karlos.png";
import sebastien from "@/assets/seb.jpg";
import baptiste from "@/assets/baptiste.jpg";

import album from "@/assets/BébéPochetteAlbum.png";
import singleRap from "@/assets/single_rap.png";
import featLxG from "@/assets/feat LxG.png";

// next
import Image from "next/image";
import Link from "next/link";
import { BioOfMember } from "./components/BioOfMember";

export default function Biography() {
  const tabOfSrc = [charles, sebastien, baptiste];
  const tabOfAlbum = [
    {
      picture: album,
      Link: "https://soundcloud.com/ababi-chovoza",
    },
    {
      picture: singleRap,
      Link: "https://www.youtube.com/watch?v=43zBRSB0Uuw",
    },
    {
      picture: featLxG,
      Link: "https://www.youtube.com/watch?v=HpQpK7OTmyc",
    },
  ];
  return (
    <div className=" text-slate-950 flex items-center flex-col gap-10 text-center text-2xl">
      <Link href={"/"} className="absolute left-0">
        <button className="transition-all rounded-lg p-4 text-md bg-slate-50 text-black hover:bg-slate-950 hover:text-white">
          retourner à la page d&#39;acceuil
        </button>
      </Link>
      <Image src={logo} alt="logo"></Image>
      <h1 className=" text-5xl backdrop-blur-md w-full p-10">
        L&#39;histoire d&#39;une tortue
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1 className=" text-5xl backdrop-blur-md w-full p-10">
        Les membres du groupe
      </h1>
      <BioOfMember tabOfSrc={tabOfSrc} />
      <h1 className=" text-5xl backdrop-blur-md w-full p-10">
        La discographie
      </h1>
      <div className="flex w-full justify-around mb-10 flex-wrap">
        {tabOfAlbum.map((album, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <Link href={album.Link}>
                <Image
                  src={album.picture}
                  alt="album"
                  className="rounded-md object-cover w-80 h-80"
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
