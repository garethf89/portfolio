import React, { Component } from 'react';

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