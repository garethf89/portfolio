import * as React from "react"; 
import { Link } from 'react-router-dom'; 
import Globals from '../../Globals';

class Skills extends React.Component {

    constructor(){
        super();
        this.imageExt = Globals.res;
    }
  render() {

    const { work } = this.props;

    work.sort((a, b) => {
      if (a.fields.order < b.fields.order) {
        return -1;
      }
      if (a.fields.order > b.fields.order) {
        return 1;
      }
      return 0;
    });

    return (

        <article  id="my_work" className="site_row">

            <header>
                <h2>My Work...</h2>
            </header>
            
            <div id="work_items" className="row">              
            { 
              work.map((w, i) => {

                const workDisplay = w.fields;
                let bgStyle = {
                    backgroundImage: `url(/${workDisplay.cover}${this.imageExt}.jpg)`
                };

                return <Link key={i} className="work_item" to={`/${workDisplay.url}`} style={bgStyle}>
                    <h4>{workDisplay.name}</h4>
                </Link>
            })}

            </div>
        
        </article>
    );
  }
}


export default Skills;
