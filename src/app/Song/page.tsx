import Link from "next/link";

export default function Song() {
  return (
    <div>
      <Link href={"/"} className="absolute left-0">
        <button className="transition-all rounded-lg p-4 text-md bg-slate-50 text-black hover:bg-slate-950 hover:text-white">
          retourner à la page d&#39;acceuil
        </button>
      </Link>
    </div>
  );
}
