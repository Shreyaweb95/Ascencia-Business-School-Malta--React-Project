import React from 'react'
import EducationSection from './Education';
import Values from './Values';
import Teachers from './Teachers';
import Partners from './Partners';
import Join from './Join';
import Footer from './Footer';

function About() {
  return (
    <div>
    <EducationSection/>
    
      <Values />
      <Teachers />
      <Partners />
      <Join />
      <Footer />
    </div>
  )
}

export default About
