import { useState } from 'react'
import './App.css'
import Nav from './component/Nav/Nav.jsx'
import Section1 from './component/Body/Section1/Section1.jsx'
import Section2 from './component/Body/Section2/Section2.jsx'
import { Section3 } from './component/Body/Section3/Section3.jsx'
import { Footer } from './component/Footer/Footer.jsx'
function App() {
  
  return (
    <>
    <Nav/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
    </>
  )
}

export default App
