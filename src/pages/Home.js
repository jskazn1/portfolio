import React from 'react'
// import placeholder from '../images/placeholder-image.svg'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Sage from './Sage'

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
                image={'/images/placeholder-image.svg'}
                link="sage"
            />
            <Project 
                title="ANSYS, Inc."
                subtitle="UX Design Internship"
                // description="N/A"
                image={'/images/placeholder-image.svg'}
                link="ansys"
            />
        </div>
    </div>
}

function Project(props) {
    
    return <div className="project">
        <div>
            <Link to={"/projects/"+props.link}>       
                <div className="project-image" style={{
                    backgroundImage:`url(${props.image})`,
                }} />
            </Link>
            <h3 className="project-title">{props.title}</h3>
            <h4 className="project-subtitle">{props.subtitle}</h4>
            {props.description}
        </div>

        <Route path="/Sage" component={Sage} />

    </div>
}

export default Home