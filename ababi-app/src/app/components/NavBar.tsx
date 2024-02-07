import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex text-3xl justify-around text-white absolute h-full w-full">
      <Link href={"/Home"}>
        <button className="rounded-lg text-black p-4 hover:bg-gray-200 hover:text-black">
          Home
        </button>
      </Link>
      <Link href={"/Biography"}>
        <button className="rounded-lg text-black p-4 hover:bg-gray-200 hover:text-black">
          Biography
        </button>
      </Link>
      <Link href={"/Song"}>
        <button className="rounded-lg text-black p-4 hover:bg-gray-200 hover:text-black">
          Song
        </button>
      </Link>
      <Link href={"/Merch"}>
        <button className="rounded-lg text-black p-4 hover:bg-gray-200 hover:text-black">
          Merch
        </button>
      </Link>
    </nav>
  );
};
