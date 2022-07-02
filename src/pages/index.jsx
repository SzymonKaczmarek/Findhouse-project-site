import React, { useEffect } from "react"; 
import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Problems } from '@/components/Problems'
import { WhoAmI } from '@/components/WhoAmI'
import YellowSection from '@/components/YellowSection'
import { BigData } from '@/components/BigData'
import Opinions from '@/components/Opinions'
import CTA from '@/components/CTA'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Findhouse - Twój czas się liczy</title>
        <meta
          name="description"
          content="Naszym celem jest zaspokojenie potrzeb klienta kupującego nieruchomość poprzez maksymalne skrócenie czasu poświęconego na jej poszukiwanie."
        />
      </Head>
      <Header />
      <main className="block overflow-hidden">
        <Hero />
        <Problems />
        <WhoAmI />
        <YellowSection />
        <BigData />
        <Opinions />
        <CTA />
      </main>
      <Footer />
    </>
  )

}
