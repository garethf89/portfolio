import React, { Component } from "react";
import SVGInline from "react-svg-inline";

import { SkillsData } from '../../Data/SkillsData';

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
                if(!skill.home) return false;
                return  <li key={i}>
                        <SVGInline svg={ skill.svg } className={`item ${skill.class || "" }`} />
                        <span id={`icon-${i}`} className="label">{skill.name}</span>
                    </li>
                })}
        </ul>
        
        </article>
    );
  }
}


export default Skills;
