'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import AboutUs from "@/components/about-us/page";
import ContatcUS from "@/components/contact/page";
import Header from "@/components/header/page";
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';

export default  function Home() {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main>   
      
        <Navbar/> 
        <Header/>
        <AboutUs/>
        <ContatcUS/>
        <Footer/>
    </main>
  );
}
