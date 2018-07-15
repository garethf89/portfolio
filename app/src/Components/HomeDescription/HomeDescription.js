import React, { Component } from "react";
import face from '../../assets/images/circle2X.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class HomeDescription extends Component {


  render() {

    const icons = [
        {
            icon: 'briefcase',
            header: 'Experience with many clients',
            paragraph: 'Clients I have worked with have ranged from small start-ups to large global brands.'
        },
        {
            icon: 'cog',
            header: 'Skills',
            paragraph: 'I have experience developing web applications using React, AngularJS and Angular 2+. I am experienced with Wordpress and have server side knowledge in Node.'
          },
          {
            icon: 'mobile',
            header: 'Devices',
            paragraph: 'I have experience developing website compatible with all devices, with or without the aid of a framework.'
          }
    ];
    
    return (
    <div>
        <article itemScope itemType="http://schema.org/Person" id="about_me" className="site_row centered topSection"  >
            <span className="icon face">
                <img src={face} width="87" height="96" alt="Gareth Ferguson face" />
            </span>
            <h2>About Me...</h2>
            <p className="about_text">
                <span className="hidden" itemProp="name">Gareth Ferguson</span>
                I am a <span itemProp="jobTitle">Web / Javascript Developer</span> based in  <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress"><span itemProp="addressLocality">Newcastle Upon Tyne</span>,   <span itemProp="addressRegion">UK</span></span>.
                <br/>I specialise in working on large scale Javascript web applications using technology such as React, Angular and AngularJS.
            </p>
        </article>

        <article className="site_row centered">
            <div className="row">

            {icons.map((skill, i) => {
                return <div className="skillIcon" key={i}>
                        <section>
                            <span className="icon feature">
                                <FontAwesomeIcon icon={["fas", skill.icon]}/>
                            </span>
                            <header>
                                <h3>{skill.header}</h3>
                            </header>
                            <p>{skill.paragraph}</p>
                    </section>
                    </div>
             })}
            </div>
        </article>
    </div>
    );
  }
}


export default HomeDescription;
