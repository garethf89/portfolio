import * as React from "react"; 
import { connect } from 'react-redux';
import LoadError from '../../Components/General/LoadError';
import Spinner from '../../Components/General/Spinner';

const Content = WrappedComponent => {
  
  class ContentRenderingComponent extends React.Component {

    render() {

      const { data, loading } = this.props;

      if ( loading) {
        return <Spinner />
      } else if (!data) {
        return <LoadError /> 
      }

      return <WrappedComponent data={data} {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      loading: state.data.loading,
      data: state.data.data
    }
  };
    
  return connect(mapStateToProps)(ContentRenderingComponent);
}

export default Content;