import React from 'react'
import Header from '../Header';
import Banner from './Banner';
import Project from './Project';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from '../Footer';

function Layout() {
  return (
    <>
        <Header/>
        <Banner/>
        <Project/>
        <Skills />
        <AboutMe/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Layout;