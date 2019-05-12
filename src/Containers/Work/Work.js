import React, { Component } from "react";
import {WorkData} from '../../Data/WorkData';

import {Link} from 'react-router-dom'; 
import TechList from "../../Components/TechList/TechList";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import Anchor from "../../Components/General/Anchor";

class Work extends Component {

  constructor(){
    super();
    this.work = {};
    this.bg = false;
  }

  componentWillMount() {

    const url = this.props.match.url;
    const result = WorkData.filter(work => url.indexOf(work.url) > -1);

    if(!result.length){
      return;
    }
    
    this.work = result[0];
    this.bg = `linear-gradient(50deg, rgba(255,255,255,1) 50%,rgba(255,255,255,0.7) 100%),url(${this.work.bg})`;
    
  }


  render() {

    const bgStyle = {
      background: this.bg
    }
    
    const content = {__html: this.work.desc};

    return (
      <article id="work_page" className="site_row highlightContainer clearfix" style={bgStyle}>
        <header>
            <Link className="workPage_home home_button" to="/">Home</Link>
            <h2>{this.work.name}</h2>
        </header>

        <section className="left_work">
              <p dangerouslySetInnerHTML={content}></p>

              <h4>Technology</h4>
              <TechList skills={this.work.skills} />

          </section>

          <section className="right_work">

            <h4>Images</h4>
            
            <PhotoGallery images={this.work.images} classNames="work_screenshot"/>
            {this.work.links && this.work.links.map((link, i) => {
              return <Anchor key={i} link={link.link} text={link.title} classes="button--expand" tabindex={i} target="_blank" />
            })}

          </section>
      </article>

    );
  }
}

export default Work;