import * as React from "react"; 
import RequiredLabel from "./RequiredLabel";

class TextArea extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
          <RequiredLabel required={this.props.required}/>
        </label>
        <textarea aria-required={this.props.required ? 'true': 'false'} 
              required={this.props.required} 
              name={this.props.name}
              id={this.props.name} 
              row={this.props.rows}
              onChange={this.props.onChange}
        />
      </div>
    );
  }
}


export default TextArea;