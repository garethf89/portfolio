import React, { Component } from "react";
import Menu from '../../Components/Menu/Menu';

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
                <Menu />
              </nav>
          </header>
    );
  }
  
}
export default DesktopMenu;
