import React, { Component } from "react";
import { connect } from 'react-redux';

import * as Slideout from 'slideout';

import styles from './SlideMenuMobile.scss';

class SlideMenuMobile extends Component {

componentDidMount(){

    this.slider = new Slideout({
        'panel': document.getElementById('content'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 70,
        'fx': 'ease-in-out',
        'duration' : 400
    });
    
    this.slider.on('beforeopen', function() {
        this.menu.classList.add('menu-open');
    }).on('beforeclose', function() {
        this.menu.classList.remove('menu-open');
    });

}

componentWillReceiveProps(newProps){
    if(this.props.menu.open !== newProps.menu.open) this.slider.toggle();
}
 
  render() {
    return (
        <nav id="menu" className={styles.nav_mobile}>
            <ul role="menubar">
                <li className="current" role="menuitem"><a>Home</a></li>
                <li><a fragment="my_work" role="menuitem">Work</a></li>
                <li><a role="menuitem">Contact</a></li>
                <li role="menuitem">
                    <a target="_blank" href="files/cv.pdf" download="cv.pdf"> <span className="icon dlIcon fa fa-download"></span>Download CV</a>
                </li>
            </ul>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return state.menu
}
  
export default connect(mapStateToProps)(SlideMenuMobile);