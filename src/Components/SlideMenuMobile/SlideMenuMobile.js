import React, { Component } from "react";
import { connect } from 'react-redux';

import * as Slideout from 'slideout';

import styles from './SlideMenuMobile.scss';

import Menu from '../../Components/Menu/Menu';

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
           <Menu />
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return state.menu
}
  
export default connect(mapStateToProps)(SlideMenuMobile);