import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {requestLastFm} from '../../Actions/lastfm'
import styles from './LastFM.scss';

class LastFM extends Component {

  constructor(){
    super();
    this.isActive = false;
  }

  componentDidMount()
  {
    this.props.requestLastFm();
  }

  componentDidUpdate()
  {
    console.log(this.props)
  }

  render() {

    console.log(this.props)

    let activeClass = this.isActive ? 'lastfm_albums--active' : 'lastfm_albums--inactive';

    return (
        <article id="lastfm_albums" className={`${styles.lastfm_albums} site_row`} >
          <div className={`${activeClass}`}>
            <header>
                <div className="icon fa-lastfm logo-large"></div>
                <h2>Recently Played...</h2>
            </header>
            
          
            <div className="lastfm_albums__music-container">
                {/* <img src="css/blank.gif" alt="{{album.name}} cover" src="album.image[2]['#text']" /> */}
                <div className="music-info">
                    {/* <h5>{{album.name}}</h5> */}
                    {/* <h6>{{album.artist.name}}</h6> */}
                </div>
          </div>
          </div>
        
        </article>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
  loading: state.loading,
  error: state.error
});
  
const mapDispatchToProps = dispatch => ({
  requestLastFm: () => dispatch(requestLastFm)
});

export default connect(mapStateToProps,mapDispatchToProps)(LastFM);