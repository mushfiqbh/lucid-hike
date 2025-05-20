import { LucidHike } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="m-3 p-3 rounded-xl border-t bg-slate-300 flex justify-between">
      <Image src={LucidHike} alt="Logo" width={100} height={50} />
      <div className="flex gap-5">
        <Link href="">
          <FaFacebook className="text-blue-500 hover:-translate-y-0.5" />
        </Link>
        <Link href="">
          <FaInstagram className="text-blue-500 hover:-translate-y-0.5" />
        </Link>
        <Link href="">
          <FaYoutube className="text-blue-500 hover:-translate-y-0.5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
