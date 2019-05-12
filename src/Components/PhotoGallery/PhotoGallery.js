import React, { Component } from "react";

import * as baguetteBox from 'baguettebox.js';
import '../../../node_modules/baguettebox.js/dist/baguetteBox.css';

class PhotoGallery extends Component {


constructor()
{
    super();
    this.photoSelector = 'photo-gallery';
}

componentWillMount(){
    this.rel =  Math.random().toString(36).substring(2, 15);
}

componentDidMount(){
    baguetteBox.run('.' + this.photoSelector, {
        captions : false,
        fullscreen: true,
        preload: 0
    });
}

  render() {

    return (

        <div className={`float_block ${this.photoSelector}`}>
            {this.props.images.map((image, i) => {
                return <a key={i}
                            className={this.props.classNames} 
                            rel={this.rel} 
                            href={image.image} 
                            aria-haspopup="true"
                        >
                            <picture>
                                <source alt="Screenshot" type="image/webp" src={image.thumb} className="work_thumb" />
                                <img alt="Thumbnail" src={image.thumb} className="work_thumb" />
                            </picture>
                        </a>
            })}
        </div>
    );
  }
}

export default PhotoGallery;