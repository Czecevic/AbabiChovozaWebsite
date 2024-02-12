import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faSoundcloud,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const NavBar = () => {
  return (
    <nav className="flex flex-col text-3xl text-black items-start w-full justify-around max-lg:h-full max-lg:absolute">
      <Link href={"/Live"}>
        <button className="transition-all rounded-lg p-4 hover:bg-slate-50 hover:text-black">
          Live
        </button>
      </Link>
      <Link href={"/Biography"}>
        <button className="transition-all rounded-lg p-4 hover:bg-slate-50 hover:text-black">
          Biography
        </button>
      </Link>
      <Link href={"/Song"}>
        <button className="transition-all rounded-lg p-4 hover:bg-slate-50 hover:text-black">
          Song
        </button>
      </Link>
      <Link href={"/Merch"}>
        <button className="transition-all rounded-lg p-4 hover:bg-slate-50 hover:text-black">
          Merch
        </button>
      </Link>
      <div className="w-full flex h-10 justify-around items-center">
        <Link href={"https://www.facebook.com/ababichovoza?locale=fr_FR"}>
          <FontAwesomeIcon icon={faFacebook} className="w-10" />
        </Link>
        <Link href={"https://www.instagram.com/ababi_chovoza/"}>
          <FontAwesomeIcon icon={faInstagram} className="w-10" />
        </Link>
        <Link href={"https://soundcloud.com/search?q=ababi%20chovoza"}>
          <FontAwesomeIcon icon={faSoundcloud} className="w-10" />
        </Link>
        <Link href={"https://www.youtube.com/@ababichovoza2454"}>
          <FontAwesomeIcon icon={faYoutube} className="w-10" />
        </Link>
        {/* <FontAwesomeIcon icon={faSpotify} /> */}
      </div>
    </nav>
  );
};
