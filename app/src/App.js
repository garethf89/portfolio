import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './css/main.scss';

import Footer from "./Containers/Footer/Footer";
import Header from './Containers/Header/Header';
import SlideMenuMobile from './Components/SlideMenuMobile/SlideMenuMobile';

import routes from './Routes';

import { Route, Switch } from 'react-router-dom';

import dotenv from 'dotenv';

import {Icons} from './Icons';

Icons();
dotenv.config();

class App extends Component {

  componentWillMount()
  {
    this.props.history.listen((location, action) => {
     if(location.pathname === '/' ) return
     if(location.pathname === '/#my_work'){
       this.animateToElement('my_work');
       return
     }
     
     this.animateToElement('main_content');
    });
  }

    animateToElement(el){
      let style = window.getComputedStyle(document.getElementById("nav__pullDown"));
      let timeAmount = style.display === 'none' ? 10 : 400;
      window.setTimeout(function(){ 
        document.getElementById(el).scrollIntoView({ 
          block:'start',
          behavior: 'smooth'
        });
      }, timeAmount);
    }

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

export default App;