import React from 'react'
import placeholder from '../images/placeholder-image.svg'

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
    return <div className="project">
        <img src={props.image} />
        <h3 className="project-title">{props.title}</h3>
        <h4>{props.subtitle}</h4>
        {props.description}
    </div>
}

export default Home