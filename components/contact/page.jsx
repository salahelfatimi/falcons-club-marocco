"use client"
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from "next/navigation";

export default function ContactUs() {
    const t = useTranslations('HomePage');
    const params = useParams();
    const { locale } = params;
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div id='Contact' ref={container} className='relative flex items-center justify-center h-screen overflow-hidden' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className={`m-4 relative z-10 p-6 rounded-xl bg-white w-auto h-auto flex flex-col justify-center items-center gap-4 ${locale === "ar" ? "text-right" : "text-left"}`}>
                <h2 className='text-greenPrimary font-black font-satoshi text-3xl uppercase'>{t('Contact.title')}</h2>
                <p className='text-center text-sm font-satoshi'>{t('Contact.h3')}</p>
                <p className='text-center text-sm font-satoshi'>{t('Contact.h3_1')}</p>
                <div className='w-full flex flex-col gap-4'>
                    <input type="text" name="FullName" id="" className='rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi' placeholder={t('Contact.fullName')} />
                    <input type="email" name="Email" id="" className='rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi' placeholder={t('Contact.Email')} />
                    <input type="tel" name="Phone" id="" className='rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi' placeholder={t('Contact.Phone')} />
                    <button className='bg-greenPrimary border-2 border-greenPrimary hover:bg-white hover:text-greenPrimary duration-500 p-3 text-white font-satoshi font-bold'>{t('Contact.button')}</button>
                </div>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src={'/img/egale.png'} fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    )
}