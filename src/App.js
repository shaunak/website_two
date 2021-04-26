import './App.css';
import fileIcon from "./images/text-document.png"
import homeIcon from "./images/home.png";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import {Container, ResumeContainer} from "./components/container.js";

const name = "Shaunak Tulshibagwale";

document.body.style = 'background-image: #f5ea73;';

const HomeButton = (props) => {
  return (
   <div className="icon" onClick={props.destination}>
     <img src={homeIcon} className="icon-img" /> 
      <span className="subtext">home</span> 
   </div>
  )
}

const ResumeButton = (props) => {
  return (
   <div className= "icon" onClick={props.destination}>
     <img src={fileIcon} className="icon-img" /> 
      <span className="subtext">resumé</span> 
   </div>
  )
}

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  
  const exitFunction = () => {
	setCurrentScreen(null);
  }
  const setHome = () => {
	setCurrentScreen("home");
  }
  
  const setResume = () => { 
	console.log("beeop boop");
	setCurrentScreen("resume");
  }

  return (
   <>
    <Helmet> <title>{"Shaunak's Website"} </title> </Helmet>
    <div className="iconLayout">
      <HomeButton destination={setHome} />
      <ResumeButton destination={setResume} />
    </div>
    <div className="App">
	  {currentScreen === "home" &&  <Container title={name} exit={exitFunction}/>} 
	  {currentScreen === "resume" &&  <ResumeContainer exit={exitFunction}/>} 
    </div>
   </>
  );
}

export default App;
