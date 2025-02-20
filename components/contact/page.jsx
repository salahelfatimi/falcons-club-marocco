"use client"
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ContatcUS() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div id='Contact' ref={container} className='relative  flex items-center justify-center h-screen overflow-hidden'style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
            <div className=' m-4  relative z-10 p-6 rounded-xl bg-white w-auto h-auto flex flex-col justify-center items-center gap-4'>
                <h2 className=' text-greenPrimary font-black font-satoshi text-3xl uppercase'>Contactez-nous</h2>
                <p className=' text-center text-sm font-satoshi'>Vous souhaitez en savoir plus sur la fauconnerie au Maroc, participer à nos événements ou rejoindre notre communauté ? <br /> N&apos;hésitez pas à nous contacter !</p>
                <div className=' w-full flex flex-col gap-4'>
                    <input type="text" name="FullName" id="" className='rounded p-2 px-4  border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi ' placeholder='Nom et prénom' />
                    <input type="email" name="Email" id="" className='rounded p-2 px-4  border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi ' placeholder='E-mail'/>
                    <input type="tel" name="Phone" id="" className='rounded p-2 px-4  border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi ' placeholder='Telephone '/>
                    <button className='  bg-greenPrimary border-2 border-greenPrimary  hover:bg-white hover:text-greenPrimary e duration-500 p-3 text-white font-satoshi font-bold '>Envoyé</button>
                </div>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    <Image src={'/img/egale.png'} fill alt="image" style={{objectFit: "cover"}}/>
                </motion.div>
            </div>
        </div>
    )
}