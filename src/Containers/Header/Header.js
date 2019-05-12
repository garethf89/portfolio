import React, { Component } from "react";

import SlideMenuIcon from '../../Components/SlideMenuIcon/SlideMenuIcon';
import DesktopMenu from '../../Containers/DesktopMenu/DesktopMenu';
import Socket from '../../Components/Socket/Socket';

class Header extends Component {
    state = {
        show: false
    }; 

  componentDidMount(){
    setTimeout(function() {
        this.setState({
            show: true
        });
    }.bind(this), 0);
  }

  render() {
    
    return (
        <section>

        <SlideMenuIcon />

        <DesktopMenu />
        
            <section id="header" role="banner">
                <div className={`header__inner  ${this.state.show ? 'show' : ''} `}>
                    <header>
                        <h2>Gareth Ferguson</h2>
                    </header>
                    <p>Web Developer based in Newcastle Upon Tyne</p>
                </div>
                {/* <Socket /> */}
            </section> 


        </section>

    );
  }
}


export default Header;
