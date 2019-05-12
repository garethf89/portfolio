import React, { Component } from "react";

class RequiredLabel extends Component {

  render() {

    if (!this.props.required) {
      return false
    }
    
    return (
        <span className="required">*</span>
    );
  }
}


export default RequiredLabel;