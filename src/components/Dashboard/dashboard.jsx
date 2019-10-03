import React, { Component } from 'react';
import Header from './header';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bucketList, createBucket, deleteSingleBucket, updateSingleBucket } from '../../stores/actions/bucketlists';
import MainBody from './mainbody';
import CreateModal from './createModal';
import DeleteModal from './deleteModal';
import EditModal from './editModal';


export class Dashboard extends Component {
  state = {
    modal: false,
    name: '',
    Dashboard: 'create',
    BucketId: ''
  };


  componentDidMount() {
    this.props.getBucketList();
  }
  
  toggle(e='', state="", id="",names="") {
    id = e.target && e.target.id.split('||')[0]
    names = e.target && e.target.id.split('||')[1]
    this.setState(prev => ({
      modal: !prev.modal,
      name: names,
      Dashboard: state,
      BucketId: id
    }));
    console.log(e.target && e.target.id.split('||')[1]);  
  }



  
  async handleCreate (e) {
    e.preventDefault();
    const { name } = this.state;
    const {createNewBucket, getBucketList } = this.props
    const details = { name };
    await createNewBucket(details);
    this.toggle()
    await getBucketList();
  };

  async handleDelete  () {
    const {BucketId } = this.state;
    
    const { deleteBucket, getBucketList  } = this.props
     await deleteBucket(BucketId)
     this.toggle()
     await getBucketList();
  }

  handleInput(e){
    const {name, value } = e.target;
    this.setState({[name]: value});
  } 

  async handleUpdateBucket(e){
    e.preventDefault();
    const { BucketId, name } = this.state;
    const details = { name }
    
    const { updateBucket, getBucketList  } = this.props
     await updateBucket(BucketId, details)
     this.toggle()
     await getBucketList();
  }

  render() {
    const { modal, Dashboard, name } = this.state;

    let Modals;

    if (Dashboard === 'create') {
      Modals =  <CreateModal toggles={() => this.toggle()} handleInput={e => this.handleInput(e)} handleSubmit={e => this.handleCreate(e)}/> ;
    } else if(Dashboard === 'delete') {
      Modals = <DeleteModal toggles={() => this.toggle()} handleDelete={() => this.handleDelete()}/>;
    } else if(Dashboard === 'edit'){
      Modals =  <EditModal toggles={() => this.toggle()} handleInput={e => this.handleInput(e)} handleEdit={e => this.handleUpdateBucket(e)} value={name}/> ;
    }


    return (
      <section className="main">
         <Modal isOpen={modal} toggle={() => this.toggle()}>
           {Modals}
         </Modal>
        <Header name={this.props.user.lastname}/>
        <MainBody create={(e, state) => this.toggle(e, 'create')} deleteM={(e, state) => this.toggle(e, 'delete')} editM={(e, state) => this.toggle(e, 'edit')}/>
       
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});
const mapDispatchToProps = {
  getBucketList: bucketList,
  createNewBucket: createBucket,
  deleteBucket: deleteSingleBucket,
  updateBucket: updateSingleBucket
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
