'use client'

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
            <div className={`container py-10 px-6 font-satoshi ${locale === "ar" ? "text-right" : "text-left"}`}>
                <h2 className='text-4xl font-black text-gray-900 mb-6'>{t('Propos.title')}</h2>
                <div className="flex flex-col gap-8">
                    <div>
                        <h3 className="text-xl text-redPrimary font-bold uppercase mb-4">{t('Propos.h3')}</h3>
                        <ul className="list-none list-outside text-gray-700">
                            {t.raw('Propos.p2').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-redPrimary uppercase mb-4">{t('Propos.h3_2')}</h3>
                        <ul className="list-none list-outside text-gray-700">
                            {t.raw('Propos.p3').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-10 w-full flex items-start">
                    <button onClick={handleScrollToContact} className="px-6 py-3 text-xs lg:text-base bg-redPrimary text-white font-bold rounded-lg shadow-md hover:bg-[#fff] hover:text-redPrimary border-2 border-redPrimary duration-700 transition">
                        {t('Propos.button')}
                    </button>
                </div>
            </div>
        </div>
    );
}