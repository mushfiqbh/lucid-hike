import React from "react";
import Image from "next/image";
import { LucidHike } from "@/assets/assets";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="w-full h-20 bg-white fixed inset-0 z-10 flex items-center justify-between px-10">
        <Link href="/">
          <Image src={LucidHike} alt="Logo" width={120} height={80} />
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <Link href="">Services</Link>
          <Link href="/cphike">CP Hike</Link>
          <Link href="">Services</Link>
          <Link href="">Services</Link>
          <Link href="">Services</Link>
        </div>
        <Link href="/auth" className="p-1 border rounded-2xl">
          Sign In
        </Link>
      </nav>
      <div className="pt-20"></div>
    </header>
  );
};

export default Navbar;
