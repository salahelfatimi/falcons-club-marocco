'use client'

import { BadgeInfo, ChartArea, CircleAlert, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function AboutUs() {
    const params = useParams();
    const { locale } = params;

    const t = useTranslations('HomePage');
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
            <img src='/img/about/1.png' alt='Morocco Falcon Club' className='lg:w-[50vw] lg:h-[50vw] w-full h-full bg-cover' title="Morocco Falcon Club" />
            <div className={`container py-10 px-10 font-satoshi ${locale === "ar" ? "text-right" : "text-left"}`}>
                <h2 className='text-4xl font-black text-gray-900 mb-6'>{t('Propos.title')}</h2>
                <div className="flex flex-col gap-8 ">
                    <div>
                        <h3 className="text-xl text-redPrimary font-bold uppercase mb-4">
                            {t('Propos.h3')}
                        </h3>
                        <div dir={locale === "ar" ? "rtl" : "ltr"}>
                            <ul className={` list-outside text-gray-700 ${locale === "ar" ? "text-right" : "text-left"} space-y-2`}>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li1')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li2')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li3')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li4')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul.li5')}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-redPrimary uppercase mb-4">
                            {t('Propos.h3_2')}
                        </h3>
                        <div dir={locale === "ar" ? "rtl" : "ltr"}>
                            <ul className={`list-disc list-outside text-gray-700 ${locale === "ar" ? "text-right" : "text-left"} space-y-2`}>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li')}</li>
                                <li  className={` flex flex-row gap-2`}><GraduationCap  className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li1')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li2')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li3')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li4')}</li>
                                <li  className={` flex flex-row gap-2`}><CircleAlert className=" max-w-5 min-w-5 stroke-greenPrimary"/>{t('Propos.ul2.li5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`text-center mt-10 w-full  flex ${locale === "ar" ? "justify-end" : "justify-start"}`}>
                    <button onClick={handleScrollToContact} className="px-6 py-3 text-xs lg:text-base bg-redPrimary text-white font-bold rounded-lg shadow-md hover:bg-[#fff] hover:text-redPrimary border-2 border-redPrimary duration-700 transition">
                        {t('Propos.button')}
                    </button>
                </div>
            </div>
        </div>
    );
}