import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Problems } from '@/components/Problems'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { WhoAmI } from '@/components/WhoAmI'
import YellowSection from '@/components/YellowSection'
import { BigData } from '@/components/BigData'
import Opinions from '@/components/Opinions'
import CTA from '@/components/CTA'

export default function Home() {
  
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
      <main>
        <Hero />
        <Problems />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <WhoAmI />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
        <YellowSection />
        <BigData />
        <Opinions />
        <CTA />
      </main>
      <Footer />
      <script src="/aos.js" />
      <link rel="stylesheet" href="/aos.css" />
      <script>
          AOS.init();
        </script>
    </>
  )
}
