import React from 'react'
import { Route, Link, Redirect} from 'react-router-dom'
import Sage from './Sage'
import Ansys from './Ansys'

function Projects(){
    return <div className="page">
      <Route path="/projects/sage" component={Sage} />
      <Route path="/projects/ansys" component={Ansys} />
    </div>
}

export default Projects