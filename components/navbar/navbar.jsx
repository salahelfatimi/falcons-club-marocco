"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import LanguageSwitcher from "./languageSwitcher";

export default function Navbar() {

  const params = useParams();
  const { locale } = params;
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 flex justify-between items-center px-4">
          {/* Center container for logo */}
          <div className="flex-1 flex justify-center">
              <div className="backdrop-blur-sm bg-white px-2 py-2 w-fit rounded-full flex justify-center items-center">
                  <img src="/img/logo.png" alt="Marocco falcon club" title="Marocco falcon club" className="w-20" />
              </div>
          </div>
      </nav>

    )
}