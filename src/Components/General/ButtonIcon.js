import * as React from "react"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ButtonIcon extends React.Component {

  render() {

    const { icon, prefix } = this.props;
    
    return (
        <FontAwesomeIcon className="icon" icon={[prefix,icon]} />
    );
  }
}


export default ButtonIcon;