import React from 'react'
import placeholder from '../images/placeholder-image.svg'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Sage from './pages/Sage'

function Home(){
    
    return <div className="page">
        <div className="intro-message">

        </div>
        <h2>Selected Projects</h2>
        <div className="selected-projects">
            <Project 
                title="Sage Bionetworks"
                subtitle="UX Design Internship"
                // description="N/A"
                image={placeholder}
                // link="project1-sage.js"
            />
            <Project 
                title="ANSYS, Inc."
                subtitle="UX Design Internship"
                // description="N/A"
                image={placeholder}
            />
        </div>
    </div>
}

function Project(props) {
    
    return <BrowserRouter>
        <div className="project">
            <button onclick="">
                <Link to="/Sage">       
                    <img src={props.image} />
                </Link>
            </button>
            <h3 className="project-title">{props.title}</h3>
            <h4 className="project-subtitle">{props.subtitle}</h4>
            {props.description}
        </div>

        <Route path="/Sage" component={Sage} />

    </BrowserRouter>
}

export default Home