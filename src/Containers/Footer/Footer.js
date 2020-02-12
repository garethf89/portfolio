import * as React from "react"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import * as styles from './Footer.scss';

class Footer extends React.Component {

  render() {

    const icons = [
      {
        icon: 'twitter',
        url: "//www.twitter.com/gazmatron1"
      },
      {
        icon: 'facebook-f',
        url: "//www.facebook.com/gazmatron1"
      },
      {
        icon: 'linkedin-in',
        url: "//uk.linkedin.com/in/garethferguson1"
      }
    ];

    const copyright = `Gareth Ferguson, ${new Date().getFullYear()}`;

    return (
      <footer id="footer" className={styles.footer}>
        <h3>Share</h3>
        <ul className="icons">
          {icons.map((footerElem, i) => {
            return <li key={i}>
                      <a href={footerElem.url} rel="noopener" target="_blank">
                        <FontAwesomeIcon icon={["fab", footerElem.icon]} className="icon" />
                        <span className="label">{footerElem.label}</span>
                      </a>
                  </li>
          })}
        </ul>
        <span className={styles.copyright}>{copyright}</span>
      </footer>      
    );
  }
}


export default Footer;
