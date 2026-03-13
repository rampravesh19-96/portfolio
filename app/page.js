'use client'
import { useEffect, useState } from "react";
import Head from 'next/head'
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      // Default to dark
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <title>Ram Pravesh Singh | Full Stack Developer | React Node MERN</title>
        <meta name="description" content="Full Stack Developer with 3.5+ years experience building SaaS, Travel and Healthcare platforms using React, Node.js and MERN stack." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ram Pravesh Singh | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer with 3.5+ years experience building SaaS, Travel and Healthcare platforms using React, Node.js and MERN stack." />
        <meta property="og:url" content="https://your-portfolio-site.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
