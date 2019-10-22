import React, { Component } from "react";

import {Link} from 'react-router-dom'; 
import TechList from "../../Components/TechList/TechList";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import Anchor from "../../Components/General/Anchor";

import { connect } from 'react-redux';
import Content from '../Content/Content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
class Work extends Component {

  constructor(){
    super();
    this.work = {};
    this.bg = false;
  }

  componentWillMount() {
    const url = this.props.match.url;
    const result = this.props.data.work.filter(work => url.indexOf(work.fields.url) > -1);

    if(!result.length){
      return;
    }
    this.myRef = React.createRef();
    this.work = result[0];
    this.bg = `linear-gradient(50deg, rgba(255,255,255,1) 50%,rgba(255,255,255,0.7) 100%),url(${this.work.fields.bg})`;
  }

  componentDidMount() {
    const currentVal = this.myRef.current.innerHTML;
    this.myRef.current.innerHTML =  currentVal.replace(/&nbsp;/g, ' ');
  }

  render() {

    const bgStyle = {
      background: this.bg
    }
 
    console.log(this.work.fields)
    const options = {};

    const content = documentToReactComponents(this.work.fields.desc, options);

    return (
      <article id="work_page" className="site_row highlightContainer clearfix" style={bgStyle}>
        <header>
            <Link className="workPage_home home_button" to="/">Home</Link>
            <h2>{this.work.fields.name}</h2>
        </header>

        <section className="left_work">
              <div ref={this.myRef}>{content}</div>
              <h4>Technology</h4>
              <TechList refSkills={this.props.data.skills} skills={this.work.fields.skills} />

          </section>

          <section className="right_work">

            <h4>Images</h4>
            
            <PhotoGallery images={this.work.fields.images} classNames="work_screenshot"/>
            {this.work.fields.links && this.work.fields.links.map((link, i) => {
              return <Anchor key={i} link={link.link} text={link.title} classes="button--expand" tabindex={i} target="_blank" />
            })}

          </section>
      </article>

    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.data.loading,
    data: state.data.data
  }
};

export default connect(mapStateToProps, {})(Content(Work))