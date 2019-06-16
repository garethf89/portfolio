import React, { Component } from "react";
import { connect } from 'react-redux';
import Spinner from '../../Components/General/Spinner';
import { requestData } from '../../Actions/data';


const Content = WrappedComponent => {
  
  class ContentRenderingComponent extends Component {

    componentDidMount () {
      this.props.requestData();
    }

    render() {

      const { data, loading } = this.props;

      if ( loading) {
        return <Spinner />
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
    
  const mapDispatchToProps = dispatch => ({
    requestData: () => dispatch(requestData)
  });

  return connect(mapStateToProps,mapDispatchToProps)(ContentRenderingComponent);
}

export default Content;