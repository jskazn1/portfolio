import React, {useState} from 'react'
// import placeholder from '../images/placeholder-image.svg'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Sage from './Sage'

function Home(){
    
    return <div className="page">
        <div className="intro">
            <div className="intro-message">
                Welcome, I'm Jordan. <br>
                </br>I'm a <span className="emphasis">UX Product Designer</span> studying <br>
                </br>HCI at the <span className="emphasis">University of Washington</span>.
            </div>
        </div>
        <h2>Selected Projects</h2>
        <div className="selected-projects">
            <Project 
                title="Sage Bionetworks"
                subtitle="UX Design Internship • Summer '19"
                description="N/A "
                image={'/images/sage-project-logo.jpg'}
                link="sage"
            />
            <Project 
                title="ANSYS, Inc."
                subtitle="UX Design Internship • Fall '19"
                description="N/A "
                image={'/images/ansys-project-logo.jpg'}
                link="ansys"
            />
             <Project 
                title="Sage Bionetworks"
                subtitle="UX Design Internship • Summer '19"
                description="N/A"
                image={'/images/sage-project-logo.jpg'}
                link="sage"
            />
            <Project 
                title="ANSYS, Inc."
                subtitle="UX Design Internship • Fall '19"
                description="N/A"
                image={'/images/ansys-project-logo.jpg'}
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
            <h4 className="project-description">{props.description}</h4>
        </div>

        <Route path="/Sage" component={Sage} />

    </div>
}

export default Home