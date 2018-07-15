import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ButtonIcon extends Component {

  render() {

    const { icon, prefix } = this.props;
    
    return (
        <FontAwesomeIcon className="icon" icon={[prefix,icon]} />
    );
  }
}


export default ButtonIcon;