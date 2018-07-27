import React, { Component } from "react";
import {
    Link
  } from 'react-router-dom'; 
  
import Icon from '../../Components/Icon/Icon';

class Menu extends Component {

  render() {

    return (

        <ul role="menubar">
            <li className="current" role="menuitem"><Link to="/">Home</Link></li>
            <li><a fragment="my_work" role="menuitem">Work</a></li>
            <li><Link to="/contact">Contact</Link></li>
            <li role="menuitem">
            <a target="_blank" href="files/cv.pdf" download="cv.pdf"> <Icon classList="dlIcon" /> Download CV</a>
            </li>
        </ul>

    );
  }
}

export default Menu;
