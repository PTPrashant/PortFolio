// import './App.css'
// import { BrowserRouter } from 'react-router-dom'
// import CV from './Components/CV'
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import CVCustom from "./Components/CVCustom";
import Career from "./Components/Career";
import NavCustom from "./Components/NavCustom";
import PersonalProjects from "./Components/PersonalProjects";
import ContactMe from "./Components/ContactMe";
// import React from 'react'
// import Navbar from './Components/Navbar'
// import './Components/CSS'

// <Navbar/>
// <CV/>
// import "./Component/CSS.css";

function App() {
  return (
    <BrowserRouter>
      <NavCustom />
      <CVCustom />
      <Career />
      <AboutMe />
      <PersonalProjects />
      <ContactMe />
    </BrowserRouter>
  );
}

export default App;
