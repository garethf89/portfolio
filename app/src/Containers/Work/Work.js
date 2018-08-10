import React, { Component } from "react";
import {WorkData} from '../../Data/WorkData';

import {Link} from 'react-router-dom'; 
import TechList from "../../Components/TechList/TechList";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";

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
            {/* <div class="float_block photo-gallery">
              <a aria-haspopup="true" *ngFor="let image of work.images" class="work_screenshot" rel="galWork" [href]="image.image">
                    <picture>
                        <source alt="" type="image/webp" src="css/blank.gif" [src]="image.thumb" class="work_thumb">
                        <img src="css/blank.gif" [src]="image.thumb" class="work_thumb">
                    </picture>
              </a>
            </div>

            <div *ngFor="let link of work.links">
              <a role="button" class="button button--expand" target="_blank" [href]="link.link" tabindex="1">Visit {{link.title}}</a>
            </div> */}

          </section>
      </article>

    );
  }
}

export default Work;