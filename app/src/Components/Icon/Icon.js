import React, { Component } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Icon extends Component {

  render() {

    return (
        <span>         
          <FontAwesomeIcon icon={["fas", 'download']} className={`icon ${this.props.classList}`}/>
        </span>
    );
  }
}


export default Icon;