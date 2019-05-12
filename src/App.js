import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';

import './css/main.scss';

import Footer from "./Containers/Footer/Footer";
import Header from './Containers/Header/Header';
import SlideMenuMobile from './Components/SlideMenuMobile/SlideMenuMobile';
import { toggleMenu } from './Actions/menu';

import routes from './Routes';

import { Route, Switch } from 'react-router-dom';

import {Icons} from './Icons';

Icons();

class App extends Component {

  componentWillMount()
  {
    this.props.history.listen((location, action) => {
      this.props.dispatch(toggleMenu(false))
      if(location.hash === '#my_work'){
       this.animateToElement('my_work');
       return
     }
     
     this.animateToElement('main_content');
    });
  }

  animateToElement(el){
    let style = window.getComputedStyle(document.getElementById("nav__pullDown"));
    let timeAmount = style.display === 'none' ? 10 : 500;
    window.setTimeout(function(){ 
      document.getElementById(el).scrollIntoView({ 
        block:'start',
        behavior: 'smooth'
      });
    }, timeAmount);
  };

  render() {
    return (
      <main>

        <SlideMenuMobile />

        <div id="content" className="App">
             <Header />
             
            <section id="main_content">
              <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="mainAnimation" timeout={300}>
                  <Switch location={this.props.location}>
                    {routes.map((route, i) => (
                        <Route
                          key={i}
                          path={route.path}
                          component={route.component}
                        />
                      ))}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
            </section>

            <Footer />
        </div>
          
      </main>
    );
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);