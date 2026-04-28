'use client';

import { useState } from 'react';
import Background from '@/components/Background/Background';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Skills from '@/sections/Skills/Skills';
import Services from '@/sections/Services/Services';
import Projects from '@/sections/Projects/Projects';
import Experience from '@/sections/Experience/Experience';
import Contact from '@/sections/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Background />
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
