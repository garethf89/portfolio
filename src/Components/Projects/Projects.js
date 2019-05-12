import React, { Component } from "react";
import Globals from '../../Globals';
import { ProjectsData } from '../../Data/ProjectsData';

class Projects extends Component {

  constructor(){
    super();
    this.webP = Globals.webP;
  }

  render() {

    return (

        <article className="highlightContainer site_row">

            <header>
                <h2 id="projectsworkedon">Projects I have worked on.</h2>
            </header>
            <ul className={"site_row icando-icons icando-icons--logo " + (this.webP ? 'webP' : 'nowebP')} aria-labelledby="projectsworkedon" >
                { ProjectsData.map((project, i) => {
                    return  <li key={i}>
                            <span className={`item item--logo icon-${project.icon}`}></span>
                            <span className="label">{project.name}</span>
                        </li>
                    })}
            </ul>

        </article>
    );
  }
}


export default Projects;
