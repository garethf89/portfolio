import * as React from "react"; 
import { connect } from 'react-redux'

import { toggleMenu } from '../../Actions/menu';

class SlideMenuIcon extends React.Component {

  isActive = false;
    
  //ACTION TO TRIGGER CLOSE AND THE EVENT
  toggle = () => {
    this.props.dispatch(toggleMenu(!this.props.menu.open));
  }

  render() {

    return (
        <div id="nav__pullDown" className="spinner-master3 js-slideout-toggle" onClick={() => this.toggle()}>
            <div className={this.props.menu.open ? 'active spinner-spin3': 'spinner-spin3'} >
                <div className="spinner3 diagonal part-1"></div>
                <div className="spinner3 horizontal"></div>
                <div className="spinner3 diagonal part-2"></div>
            </div>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return state.menu
}
  
export default connect(mapStateToProps)(SlideMenuIcon);
