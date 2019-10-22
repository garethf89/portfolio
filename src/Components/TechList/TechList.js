import React, { Component } from "react";

class TechList extends Component {

  render() {

    const {skills, refSkills} = this.props;

    return (
      
        <ul id="tech_used">
            {skills.map((skill, i) => {
                const id = skill.fields.name;
                const referencedSkill = refSkills.find(s => s.fields.name === id);

                if(!referencedSkill || referencedSkill.fields.svg === undefined) return false;
                const renderImage = referencedSkill.fields.svg.source;
                return <li key={i}>
                            <span className={`item devicons-${referencedSkill.fields.name.toLowerCase() || "" }`} dangerouslySetInnerHTML={{ __html: renderImage }} />
                            <span>{referencedSkill.fields.name}</span>
                        </li>
            })}
        </ul>

    );
  }
}

export default TechList;