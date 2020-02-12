import * as React from "react"; 

class LoadError extends React.Component {

  render() {
    return (
        <div className="load-error" >
          Data has failed to load, try again later
        </div>
    );
  }
}


export default LoadError;