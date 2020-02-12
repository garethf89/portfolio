import * as React from "react"; 
import Globals from '../../Globals';

class Projects extends React.Component {

  constructor(){
    super();
    this.webP = Globals.webP;
  }

  render() {

    const { projects } = this.props;

    return (

        <article className="highlightContainer site_row">

            <header>
                <h2 id="projectsworkedon">Projects I have worked on.</h2>
            </header>
            <ul className={"site_row icando-icons icando-icons--logo " + (this.webP ? 'webP' : 'nowebP')} aria-labelledby="projectsworkedon" >
                { projects.map((project, i) => {
                    return  <li key={i}>
                            <span className={`item item--logo icon-${project.fields.icon}`}></span>
                            <span className="label">{project.fields.title}</span>
                        </li>
                    })}
            </ul>

        </article>
    );
  }
}


export default Projects;