import React, { Component } from "react";
import SVGInline from "react-svg-inline";

class TechList extends Component {

  render() {

    return (

        <ul id="tech_used">
            {this.props.skills.map((skill, i) => {
                return <li key={i}>
                            <SVGInline svg={ skill.svg } className="item" />
                            {skill.name}
                        </li>
            })}
        </ul>

    );
  }
}

export default TechList;