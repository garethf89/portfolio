import React, { Component } from "react";

import HomeDescription from '../../Components/HomeDescription/HomeDescription';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Work from '../../Components/Work/Work';

class Home extends Component {


  render() {

    return (
        <div>
            <HomeDescription />
            <Skills />
            <Projects />
            <Work />
        </div>
    );
  }
}


export default Home;
