import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import About from './Components/About'
import MySkills from './Components/MySkills'
import Card from './Components/Card'
import Project from './Components/Project'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'

function App() {


  return (
    <>
      <Header/>
      <div id="home"><Home/></div>
      <div id="home"><About/></div>
      <div id="toolbox"><MySkills/></div>
      <div id="craft"><Portfolio/></div>
      <div id="journey"><Experience/></div>
      <div id="home"><Testimonials/></div>
      <div id="letstalk"><Contact/></div>
    </>
  )
}

export default App
