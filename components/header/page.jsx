"use client"
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { useScroll, useTransform, motion } from 'framer-motion';
import MagneticButtonFramer from "../tools/magnetic-button-framer/page";
import { useRef } from 'react';
import React from 'react'
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header(){
    const t = useTranslations('HomePage');
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
  
    return (
        <header className=" overflow-hidden h-screen  relative  ">
            <motion.div style={{y}} className='relative h-full items-center justify-start flex '>
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop playsInline muted>
                    <source src="/vid/header_vid.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50  "></div>
                <div className=" hidden lg:block absolute top-0 left-0 w-[500px] h-[500px]  bg-black opacity-60 rounded-br-full blur-3xl "></div>
                <div className=" hidden lg:block absolute bottom-0 right-0 w-[500px] h-[500px]  bg-black opacity-60 rounded-tl-full blur-3xl "></div>

                <div className="absolute left-0 right-0  flex flex-col items-center justify-center gap-6 container">
                    <h1 className="  text-white flex flex-col gap-2 text-7xl lg:text-8xl font-black font-satoshi text-center">{t('title')}</h1>
                    <p className=" text-white font-satoshi text-center lg:text-base text-xs">  
                        {t('description')}
                    </p>
                    
                    <button 
                        className=" hover:cursor-custom text-xs lg:text-base bg-greenPrimary py-3 px-6 text-white rounded-full  font-satoshi font-bold uppercase hover:bg-[#fff] hover:text-greenPrimary   border-2 border-greenPrimary   duration-700"
                        onClick={handleScrollToContact}
                    >
                        {t('button')}
                    </button>
                    
                </div>
                <div className="flex flex-row items-center justify-end w-full gap-6 absolute bottom-0 right-0  p-10">
                    <MagneticButtonFramer>
                        <Link href={'#'} ><Instagram className=" stroke-greenPrimary w-6 h-6 " size={40} /></Link>
                    </MagneticButtonFramer>
                    <MagneticButtonFramer>
                        <Link href={'#'}><Facebook className=" stroke-greenPrimary  w-6 h-6" size={40} /></Link>
                    </MagneticButtonFramer>
                    <MagneticButtonFramer>
                        <Link href={'#'}><Mail className=" stroke-greenPrimary  w-6 h-6" size={40} /></Link>
                    </MagneticButtonFramer>
                    <MagneticButtonFramer>
                        <Link href={'#'}><Youtube className=" stroke-greenPrimary  w-6 h-6" size={40} /></Link>
                    </MagneticButtonFramer>
                </div>
            </motion.div>
            </header>
    )
}