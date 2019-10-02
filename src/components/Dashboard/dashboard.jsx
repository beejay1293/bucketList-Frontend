import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bucketList } from '../../stores/actions/bucketlists';

export class Dashboard extends Component {
  state = {

  };


  componentDidMount() {
    this.props.getBucketList();
  }


  render() {


    return (
      <section className="main">
        <Header name={this.props.user.lastname}/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});
const mapDispatchToProps = {
  getBucketList: bucketList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
