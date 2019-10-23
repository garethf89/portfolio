import React, { Component } from "react";
import { connect } from 'react-redux';

import {requestLastFm} from '../../Actions/lastfm'
import styles from './LastFM.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class LastFM extends Component {

  constructor(){
    super();
    this.isActive = this.props;
  }

  render() {

    let activeClass = (this.props.lastFm.albums && this.props.lastFm.albums.length > 0) ? 
      styles['lastfm_albums--active'] : styles['lastfm_albums--inactive'];

    return (
        <article className={`${styles.lastfm_albums} ${activeClass} site_row`}>
            <header>
                <div className="icon fa-lastfm logo-large"></div>
                <FontAwesomeIcon className={`icon ${styles['logo-large']}`} icon={['fab','lastfm']} />
                <h2>Recently Played...</h2>
            </header>
            
            { this.props.lastFm.albums && this.props.lastFm.albums.map((album, i) => {
              return <div key={i} className={styles['lastfm_albums__music-container']}>
                        <img alt={`${album.name} cover`} src={album.image[2]['#text']} />
                        <div className={styles['music-info']}>
                          <h5>{album.name}</h5>
                          <h6>{album.artist.name}</h6>
                        </div>
                      </div>
            })}     
        </article>
    );
  }
}

const mapStateToProps = state => {
  return { 
    ...state,
    albums: state.lastFm.albums,
    loading: state.lastFm.loading,
    error: state.lastFm.error
  }
};
  
const mapDispatchToProps = dispatch => ({
  requestLastFm: () => dispatch(requestLastFm)
});

export default connect(mapStateToProps,mapDispatchToProps)(LastFM);