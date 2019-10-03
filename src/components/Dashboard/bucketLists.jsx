import React, { Component } from 'react';
import Moment from 'react-moment';
import SingleBucket from './SingleBucket';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MessageBody extends Component {
  constructor() {
    super();
    this.state = {
  
    };
  }


  render() {
    const { buckets } = this.props;
    return (
      <ul className="buckets">
        {buckets.map(bck => (
          <SingleBucket
            name={bck.name}
            created= {<Moment local format="LLLL">
            {bck.date_created}
          </Moment>}
            updated={bck.date_modified}
            key={bck.id}
            id={bck.id}
            deleteModal={this.props.delete}
            editModal={this.props.edit}
          />
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
   buckets: state.buckets.bucketLists,
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageBody))
