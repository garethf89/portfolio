import * as React from "react"; 
import {
    NavLink
  } from 'react-router-dom'; 
  
import Icon from '../../Components/Icon/Icon';

class Menu extends React.Component {

  render() {

    const checkHash = (match, location) => {
      if (!location) {
        return false
      }
      if(location.hash === '#my_work'){
        return true;
      }
      return false;
    }


    const checkHome = (match, location) => {
      if (!match || !location) {
        return false
      }
      if(location.hash){
        return false;
      }
      if(match.url !== '/'){
        return false;
      }
      return true;
    }

    return (

        <ul role="menubar">
            <li className="current" role="menuitem"><NavLink to="/" isActive={checkHome} >Home</NavLink></li>
            <li><NavLink to="/#my_work" isActive={checkHash}>Work</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li role="menuitem">
            <a target="_blank" href="files/cv.pdf" download="cv.pdf"> <Icon classList="dlIcon" /> Download CV</a>
            </li>
        </ul>

    );
  }
}

export default Menu;
