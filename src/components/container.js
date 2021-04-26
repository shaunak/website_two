import '../App.css';
import me from './me.JPG';
import resume from '../resume.pdf';
import React, { useState } from 'react';
const Container = (props) => {
	return (
	  <div className="Container"> 
	    <ExitButton exit={props.exit}/>
	    <img src={me} className="portrait" />
	    <p className="Title"> {props.title}  </p>
	    <p className="Body"> Hi! I'm Shaunak, an undergrad studying Computer Science at the University of British Columbia. I've previously worked as an intern at <a href="https://zanbato.com/"> Zanbato</a> and will start an internship at  <a href="https://gusto.com/" className="nav-link">Gusto</a> soon. In my free time, I like hiking, singing, and gaming.  </p>
		<p className="Body"> <br/>  <a className="nav-link" href="https://github.com/shaunak">Github</a>	|	<a className="nav-link" href="https://linkedin.com/in/shaunakt">Linkedin</a>	|	<a href="mailto:shaun.tul@gmail.com" className="nav-link" >Email</a> </p>
	  </div>
	);
}

const ResumeContainer = (props) => { 
	
	return (
	 <div className="ResumeContainer">
	   <ExitButton exit={props.exit}/>
		<br/>
	    <a className="Body" href={resume}> view pdf version</a>
	    <GustoChunk/>
	    <ZanbatoChunk/>
	    <TAChunk/>
	    <Coursework/>
	    <Tech/>
	    </div>
	)
}

const Tech = () => {
        const [expandState, setExpandState] = useState(false);
        const updateExpandState = () => {
                setExpandState(!expandState);
        }

	return ( 
	<>
	  <p className="ResumeTitle">{<ExpandButton action={updateExpandState} symbol={expandState? "-" : "+"} content="Technical Skills"/>} </p>
		{expandState && <p className="ResumePoint">C, C++, CSS, Django, GCP, Git, HTML, Java, Javascript, LaTeX, Node, Python, React, Unix </p>}
	</>
	)
}

const Coursework = () => {
        const [expandState, setExpandState] = useState(false);
        const updateExpandState = () => {
                setExpandState(!expandState);
        }

	return (
	 <>
	   <p className="ResumeTitle">{<ExpandButton action={updateExpandState} symbol={expandState? "-" : "+"} content="Relevant Coursework" />} </p>
		{ expandState && <p className="ResumePoint">- Machine Learning and Data Mining <br/>- Intro to Computer Networking<br/>- Multivariate Calculus<br/>- Programming Languages<br/>- Intro to Probability<br/>- Intermediate Algorithm Design and Analysis</p> }
	 </>
	)
}
const TAChunk = (props) => {
	const [expandState, setExpandState] = useState(false);
        const updateExpandState = () => { 
                setExpandState(!expandState);
        }
	
	return (
	 <>
	   <p className="ResumeTitle"> {<ExpandButton action={updateExpandState} symbol={expandState? "-" : "+"} content="Teaching Assistant at UBC" /> }</p>
	   { expandState && <> <p className="ResumeDate">September 2019 - April 2020 </p>
	   <p className="ResumePoint"> - Run labs, hold office hours and assist in lectures for Software Construction taught in Java. <br/> - Grade students projects, midterms/finals as well as providing feedback to improve programming skills <br/>-  Some topics covered include software design, data structures, debugging, and unit testing </p> </>}
	 </>
	)
}
const GustoChunk = (props) => {
	const [expandState, setExpandState] = useState(false);
        const updateExpandState = () => { 
		setExpandState(!expandState);
	}
	return (
	 <>
	   <p className="ResumeTitle"> {<ExpandButton action={updateExpandState} symbol={expandState? "-" : "+"} content="Engineering Intern at Gusto" />} </p>
	   {expandState && <> <p className="ResumeDate">May 2021 - August 2021 </p>
	   <p className="ResumePoint"> - </p> </> } 
	 </>
	)
}

const ZanbatoChunk = (props) => {
        const [expandState, setExpandState] = useState(false);
        const updateExpandState = () => {
                setExpandState(!expandState);
        }

	return ( 
	 <>
	 <p className="ResumeTitle"> {<ExpandButton action={updateExpandState} symbol={expandState? "-" : "+"} content="Full Stack Intern at Zanbato" />} </p>
	{ expandState && <> <p className="ResumeDate">Jan 2021 - April 2021 </p>
	 <p className="ResumePoint"> - Worked with product and engineering teams to create interactive marketplace analytics tools by creating RESTful API endpoints and React components. <br/> - Refactored parts of the codebase to stay in line with current best practices, such as state hooks and functional components, resulting in a more consistent, up to date and readable codebase <br/> - Improved site performance by moving logic to backend and implementing more efficient Django queries </p> </> } 
	 </>
	)
}

const ExpandButton = (props) => {
  return (
     <div onClick={props.action}>
	  [{props.symbol}] {props.content}
     </div>
  )
}

const ExitButton = (props) => { 
	return (
	 <div className="button" onClick={props.exit}><p> </p></div>

	);
}


export {Container, ResumeContainer} ;
