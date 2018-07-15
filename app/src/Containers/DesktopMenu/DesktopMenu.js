import React, { Component } from "react";
import {
  Link
} from 'react-router-dom'; 

import Icon from '../../Components/Icon/Icon';

class DesktopMenu extends Component {

  componentDidMount(){

    const headerDiv = document.querySelector("#header"),
         element = document.getElementById("mainnav");

     window.addEventListener('scroll', function() {
       if (window.pageYOffset >= (headerDiv.clientHeight - 10)) {
         if (!element.classList.contains('revealHeader')) {
           element.classList.add('revealHeader');
         }
       } else {
         element.classList.remove('revealHeader');
       }
     }, {passive: true});

  }

  render() {

    return (
          <header id="nav" className="fadeAnimation nav_desktop">
              <nav id="mainnav" className="fadeAnimation">
                <ul role="menubar">
                      <li className="current" role="menuitem"><Link to="/">Home</Link></li>
                      <li><a fragment="my_work" role="menuitem">Work</a></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li role="menuitem">
                        <a target="_blank" href="files/cv.pdf" download="cv.pdf"> <Icon classList="dlIcon" /> Download CV</a>
                      </li>
                  </ul>
              </nav>
          </header>
    );
  }
  
}
export default DesktopMenu;
