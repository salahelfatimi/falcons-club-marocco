"use client"
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from "next/navigation";

export default function ContactUs() {
    const t = useTranslations('HomePage');
    const params = useParams();
    const { locale } = params;
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      tele: "",
      comment: "",
    });

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const sendEmail = async (e) => {
      e.preventDefault();
      setValidation(true);
      if (formData.fullName && formData.tele && formData.email) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.status === 200) {
            setFormData({
              fullName: "",
              email: "",
              tele: "",
              comment: "",
            });
            setValidation(false);
            setIsLoading(false);
          }
        } catch {
            setIsLoading(false);
        }
      }
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[name]: value,});
    };
    return (
        <div id='Contact' ref={container} className='relative flex items-center justify-center h-screen overflow-hidden' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className={`m-4 relative z-10 p-6 rounded-xl bg-white w-auto h-auto flex flex-col justify-center items-center gap-4 ${locale === "ar" ? "text-right" : "text-left"}`}>
                <h2 className='text-greenPrimary font-black font-satoshi text-3xl uppercase'>{t('Contact.title')}</h2>
                <p className='text-center text-sm font-satoshi'>{t('Contact.h3')}</p>
                <p className='text-center text-sm font-satoshi'>{t('Contact.h3_1')}</p>
                <form className=" w-full  flex flex-col gap-4 p-6 " onSubmit={sendEmail}>
                    <input type="text" onChange={handleInputChange}  name="fullName" id="" className={`${!formData.fullName && validation && ' border-red-500 placeholder:text-red-500'} bg-[#EFEFEF] rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi w-full ${locale === "ar" ? "placeholder:text-right" : "placeholder:text-left"} `} placeholder={t('Contact.fullName')} />
                    <input type="email" onChange={handleInputChange}  name="email" id="" className={`${!formData.email && validation && ' border-red-500 placeholder:text-red-500'} bg-[#EFEFEF] rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi w-full ${locale === "ar" ? "placeholder:text-right" : "placeholder:text-left"}`} placeholder={t('Contact.Email')} />
                    <input type="tel" onChange={handleInputChange}  name="tele" id="" className={`${!formData.tele && validation && ' border-red-500 placeholder:text-red-500'} bg-[#EFEFEF] rounded p-2 px-4 border-2 placeholder:text-sm placeholder:font-satoshi font-satoshi w-full ${locale === "ar" ? "placeholder:text-right" : "placeholder:text-left"}`} placeholder={t('Contact.Phone')} />
                    <textarea value={formData.comment} onChange={handleInputChange} className='bg-[#EFEFEF] w-full rounded-lg border-2 p-4  placeholder:text-sm  placeholder:font-satoshi font-satoshi '  placeholder=' Comment' name="comment" id="comment" cols={30} rows={6}></textarea>
                    <button disabled={isLoading} type="submit" className='bg-greenPrimary border-2 border-greenPrimary hover:bg-white hover:text-greenPrimary duration-500 p-3 text-white font-satoshi font-bold'>{t('Contact.button')}</button>
                </form>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src={'/img/egale.png'} fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    )
}