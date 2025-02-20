"use client"
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { useScroll, useTransform, motion } from 'framer-motion';
import MagneticButtonFramer from "../tools/magnetic-button-framer/page";
import { useRef } from 'react';
import React from 'react'
import Link from "next/link";

export default function Header(){
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
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/vid/header.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50  "></div>
                <div className=" hidden lg:block absolute top-0 left-0 w-[500px] h-[500px]  bg-black opacity-60 rounded-br-full blur-3xl "></div>
                <div className=" hidden lg:block absolute bottom-0 right-0 w-[500px] h-[500px]  bg-black opacity-60 rounded-tl-full blur-3xl "></div>

                <div className="absolute left-0 right-0  flex flex-col items-center justify-center gap-6 container">
                    <h1 className="  text-white flex flex-col gap-2 text-6xl lg:text-8xl font-black font-satoshi text-center"> <span className=" text-[#fff] ">MOROCCO</span><span className=" text-[#fff]">FALCON CLUB</span></h1>
                    <p className=" text-white font-satoshi text-center lg:text-base text-xs">  
                        La communauté de référence pour les passionnés de fauconnerie au Maroc. <br />
                        Dédié à l&apos;art, à la tradition et à la passion de la fauconnerie, notre club rassemble experts et amateurs pour célébrer ce patrimoine noble. <br />
                        Rejoignez-nous pour des événements exclusifs, des sessions d&apos;entraînement et une passion commune pour ces oiseaux majestueux. 
                    </p>
                    
                    <button 
                        className=" hover:cursor-custom bg-greenPrimary py-3 px-6 text-white rounded-full  font-satoshi font-bold uppercase hover:bg-[#fff] hover:text-greenPrimary   border-2 border-greenPrimary   duration-700"
                        onClick={handleScrollToContact}
                    >
                        Rejoignez-nous dès maintenant 🦅
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