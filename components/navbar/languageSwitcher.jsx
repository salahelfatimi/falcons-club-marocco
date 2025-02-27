"use client"

import { useRouter } from "@/i18n/routing";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


const LanguageSwitcher = ({localeSelect}) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const router = useRouter();
  const handleLanguageChange = (locale) => {
    router.push(locale);
  };

  return (
    <div className="relative pr-10">
      <button  className="inline-flex items-center justify-between w-32 gap-1 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 " onClick={() => {setShowLanguage(!showLanguage)}}>
        <img width={500} height={500} src={`/img/flag/${localeSelect}.png`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" />
        <span className=" font-satoshi">{localeSelect}</span>
        <ChevronDown size={20}  className="-mr-1 lg:block hidden ml-2 h-5 w-5" />
        <ChevronUp size={20}  className="-mr-1 ml-2 block lg:hidden h-5 w-5" />
      </button>
      {showLanguage && (
        <div className=" absolute top-10 lg:bottom-auto right-0 left-0  mt-2 w-32  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className=" grid grid-cols-1 gap-2" role="none">
            <button className={`${ localeSelect === "ar" ? "bg-[#0149a6] text-white" : "text-gray-700" }  px-4 py-2 text-sm gap-2 text-left items-center inline-flex  first:rounded-t-md last:rounded-b-md hover:bg-[#0149a6] hover:text-white `} onClick={() => handleLanguageChange('ar')}><img width={500} height={500} src={`/img/flag/ar.png`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" /><span className=" font-satoshi">Arabic</span></button>
            <button className={`${ localeSelect === "en" ? "bg-[#0149a6] text-white" : "text-gray-700" }  px-4 py-2 text-sm gap-2 text-left items-center inline-flex  first:rounded-t-md last:rounded-b-md hover:bg-[#0149a6] hover:text-white `} onClick={() => handleLanguageChange('en')}><img width={500} height={500} src={`/img/flag/en.png`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" /><span className=" font-satoshi">English</span></button>
            <button className={`${ localeSelect === "fr" ? "bg-[#0149a6] text-white" : "text-gray-700" }  px-4 py-2 text-sm gap-2 text-left items-center inline-flex  first:rounded-t-md last:rounded-b-md hover:bg-[#0149a6] hover:text-white `} onClick={() => handleLanguageChange('fr')}><img width={500} height={500} src={`/img/flag/fr.png`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" /><span className=" font-satoshi">Franch</span></button>
          </div>
        </div>
      )}
    </div>
        
   
  );
};

export default LanguageSwitcher;
