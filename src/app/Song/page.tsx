import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo_v2.png";
import { MiniaYoutube } from "./components/MiniaYoutube";

export default function Song() {
  return (
    <div className="flex flex-col items-center">
      <Link href={"/"} className="p-10">
        <Image
          src={logo}
          alt="logo"
          className=" transition-all hover:invert"
        ></Image>
      </Link>
      <div className="w-4/5 border-2 border-gray-950"></div>
      <MiniaYoutube />
    </div>
  );
}
