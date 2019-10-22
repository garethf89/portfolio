import React, { Component } from "react";

class Skills extends Component {

  render() {

    const { skills } = this.props;

    return (

        <article className="highlightContainer site_row">

        <header>
            <h2 id="thingsIcanDo">Things I can do.</h2>
        </header>

        <ul className="icando-icons" aria-labelledby="thingsIcanDo" >
            {skills.map((skill, i) => {
                if(!skill.fields.home) return false;
                if(skill.fields.svg === undefined) return false;
                const renderImage = skill.fields.svg.source;
                return  <li key={i}>
                        <span className={`item devicons-${skill.fields.name.toLowerCase() || "" }`} dangerouslySetInnerHTML={{ __html: renderImage }} />
                        <span id={`icon-${i}`} className="label">{skill.fields.name}</span>
                    </li>
                })}
        </ul>
        
        </article>
    );
  }
}


export default Skills;
