import * as React from "react"; 

import HomeDescription from '../../Components/HomeDescription/HomeDescription';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Work from '../../Components/Work/Work';
import LastFM from "../../Components/LastFM/LastFM";
import { connect } from 'react-redux';
import Content from '../Content/Content';

class Home extends React.Component {

  render() {
    const { projects, skills, work} = this.props.data;

    return (
        <div>
            <HomeDescription />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Work work={work} />
            <LastFM />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.data.loading,
    data: state.data.data
  }
};
export default connect(mapStateToProps, {})(Content(Home))
