import * as React from "react"; 

class RequiredLabel extends React.Component {

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