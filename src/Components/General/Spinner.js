import * as React from "react"; 
import { BeatLoader } from 'react-spinners';

class Spinner extends React.Component {

  render() {
    return (
        <div className="spinner" >
          <BeatLoader
            sizeUnit={"px"}
            size={15}
            color={'#36D7B7'}
            loading={true}
          />
        </div>
    );
  }
}


export default Spinner;