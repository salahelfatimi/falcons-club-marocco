"use client"

import { useRouter } from "@/i18n/routing";


const LanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (locale) => {
    router.push(locale);
  };

  return (
    <div className=" flex items-center gap-2 pr-10">
      <button onClick={() => handleLanguageChange('fr')}><img width={500} height={500} src={`/img/flag/fr.svg`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" /></button>
      <button onClick={() => handleLanguageChange('ar')}><img width={500} height={500} src={`/img/flag/ar.gif`} className="h-6 w-10" alt="MOROCCO FALCON CLUB" /></button>
    </div>
  );
};

export default LanguageSwitcher;
