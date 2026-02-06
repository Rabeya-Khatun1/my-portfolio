import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './Loading';

gsap.registerPlugin(ScrollTrigger);


// 👇 Lenis global
let lenisInstance = null;
export const getLenis = () => lenisInstance;

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
    });

    lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.fromTo(
      '.fade-in-up',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
        },
      }
    );

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <div>
       {loading ? <Loading></Loading> : (
      <ThemeProvider>
      <div className='bg-white dark:bg-gray-900'>
          <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="featured-projects">
          <FeaturedProjects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      </ThemeProvider>
    )}  
    </div>
  );
}

export default App;
