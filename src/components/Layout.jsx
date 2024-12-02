import React from 'react'
import Header from '../Header';
import Banner from './Banner';
import ProjectSection from './ProjectSection';
import Skills from './Skills';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from '../Footer';

function Layout() {
  return (
    <>
        <Header/>
        <Banner/>
        <ProjectSection/>
        <Skills />
        <AboutSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Layout;