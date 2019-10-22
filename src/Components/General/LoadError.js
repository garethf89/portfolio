import React, { Component } from "react";

class LoadError extends Component {

  render() {
    return (
        <div className="load-error" >
          Data has failed to load, try again later
        </div>
    );
  }
}


export default LoadError;