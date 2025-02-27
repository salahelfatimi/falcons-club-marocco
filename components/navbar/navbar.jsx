"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import LanguageSwitcher from "./languageSwitcher";

export default function Navbar() {

  const params = useParams();
  const { locale } = params;
    return (
      <nav className="  fixed top-0 left-0 right-0  z-50 py-6 justify-center items-center flex container   ">
            <div className=" container backdrop-blur-sm bg-white px-2 py-2 w-full   rounded-full  flex justify-between p-1   items-center">
                <img src="/img/logo.png" alt=" Marocco falcon club" title=" Marocco falcon club" className=" w-20" />
                <LanguageSwitcher localeSelect={locale}/>
            </div>
      </nav>
    )
}