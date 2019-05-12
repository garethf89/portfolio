import React, { Component } from "react";

import ButtonIcon from './ButtonIcon'

class Button extends Component {

  render() {

    const { icon, prefix } = this.props;

    return (
        <button id={this.props.id} className="button" >
            {icon && <ButtonIcon prefix={prefix} icon={icon} />}
            {this.props.text}
        </button>
    );
  }
}


export default Button;