import React, { Component } from "react";
import RequiredLabel from "./RequiredLabel";

class Input extends Component {

  render() {

    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
          <RequiredLabel required={this.props.required}/>
        </label>
        <input aria-required={this.props.required ? 'true': 'false'} 
              type={this.props.type} 
              required={this.props.required} 
              name={this.props.name}
              id={this.props.name} 
              onChange={this.props.onChange}
        />
      </div>
    );
  }
}


export default Input;