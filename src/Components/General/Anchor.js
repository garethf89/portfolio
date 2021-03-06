import * as React from "react"; 

class Anchor extends React.Component {

  render() {

    const target = this.props.target ? this.props.target : '';


    return (
        <a tabIndex={this.props.tabindex} href={this.props.link} className={`${this.props.classes} button`} target={target} >
            {this.props.text}
        </a>
    );
  }
}


export default Anchor;