import React, { Component } from 'react';

import './css/main.scss';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faBriefcase from '@fortawesome/fontawesome-free-solid/faBriefcase';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faMobile from '@fortawesome/fontawesome-free-solid/faMobile';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

import Footer from "./Containers/Footer/Footer";
import Header from './Containers/Header/Header';
import SlideMenuMobile from './Components/SlideMenuMobile/SlideMenuMobile';

import routes from './Routes';

import { Route, Switch } from 'react-router-dom';

fontawesome.library.add(brands, faDownload, faBriefcase, faCog, faMobile, faEnvelope);

class App extends Component {

  render() {
    return (
      <main>

        <SlideMenuMobile />

        <div id="content" className="App">
             <Header />
             
            <section id="main_content">
                <Switch>
                {routes.map((route, i) => (
                    <Route
                      key={i}
                      path={route.path}
                      component={route.component}
                    />
                  ))}
                </Switch>
            </section>

            <Footer />
        </div>
          
      </main>
    );
  }
}

export default App;