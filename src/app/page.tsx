import Image from "next/image";
import { NavBar } from "./components/NavBar";
import album from "@/assets/BébéPochetteAlbum.png";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Image
        src={album}
        alt="pochette_album"
        className="h-screen w-auto max-lg:w-0"
      ></Image>
      <NavBar></NavBar>
    </main>
  );
}
