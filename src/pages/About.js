import React from 'react'
import '../About.css';
import '../media.css'

function About(){
    return <div className="page">
        <div className="about-content">
            <p>
                Hello! <br></br> <br></br>
                I'm a User Experience Designer with an interest in interaction design
                and motion design. Currently I'm a senior at the
                University of Washington studying Human-Centered Design & Engineering 
                with a focus in Human-Computer Interaction. <br></br> <br></br>
                I'm a strong believer in implementing a growth mindset towards anything
                you are trying to improve. Having setbacks isn't always the best feeling,
                but understanding that failures lead to success helps me continue growing. 
                When I am not designing, I am probably hanging out with friends, learning front-end
                development, or enjoying food :)<br></br> <br></br>
                Over Summer '19 I was a UX Design Intern at Sage Bionetworks in Seattle, Washington; and
                during Fall '20 I was a UX Design Intern at ANSYS, Inc. in Canonsburg, Pennsylvania.
            </p>
            <div className="about-image" style={{
                backgroundImage:`url(${"/images/about-image.jpg"})`,
            }} />
        </div>
    </div>
}

export default About