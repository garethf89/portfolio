import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import Globals from '../../Globals';
import { WorkData } from '../../Data/WorkData';

class Skills extends Component {

    constructor(){
        super();
        this.imageExt = Globals.res;
    }
  render() {

    return (

        <article  id="my_work" className="site_row">

            <header>
                <h2>My Work...</h2>
            </header>
            
            <div id="work_items" className="row">              
            { WorkData.map((work, i) => {

                let bgStyle = {
                    backgroundImage: `url(/${work.cover}${this.imageExt}.jpg)`
                };

                return <Link key={i} className="work_item" to={`/${work.url}`} style={bgStyle}>
                    <h4>{work.name}</h4>
                </Link>
            })}

            </div>
        
        </article>
    );
  }
}


export default Skills;
