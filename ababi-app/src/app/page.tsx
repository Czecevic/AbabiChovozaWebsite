import Image from "next/image";
import { NavBar } from "./components/NavBar";
import album from "@/assets/BébéPochetteAlbum.png";

export default function Home() {
  return (
    <main className="flex flex-row justify-start overflow-hidden">
      <NavBar></NavBar>
    </main>
  );
}
