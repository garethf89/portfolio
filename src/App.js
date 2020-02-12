import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';

import * as Sentry from '@sentry/browser';

import './css/main.scss';

import Footer from "./Containers/Footer/Footer";
import Header from './Containers/Header/Header';
import SlideMenuMobile from './Components/SlideMenuMobile/SlideMenuMobile';
import { toggleMenu } from './Actions/menu';

import {requestLastFm} from './Actions/lastfm'
import { requestData } from './Actions/data';

import routes from './Routes';

import { Route, Switch } from 'react-router-dom';

import {Icons} from './Icons';

if (process.env.REACT_APP_PROD === true) {
  console.log('sentry starting');
  Sentry.init({dsn: `${process.env.REACT_APP_SENTRY}`});
}

Icons();

class App extends React.Component {

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

    console.log('runnning')
    this.props.requestLastFm();
    this.props.requestData();
  }

  animateToElement(el){
    let style = window.getComputedStyle(document.getElementById("nav__pullDown"));
    let timeAmount = style.display === 'none' ? 10 : 500;
    window.setTimeout(() => { 
      const t = document.getElementById(el);
      if(!t) {
        return;
      }
      t.scrollIntoView({ 
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


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  requestLastFm: () => dispatch(requestLastFm),
  requestData: () => dispatch(requestData)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);