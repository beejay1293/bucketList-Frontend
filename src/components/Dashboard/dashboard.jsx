import React, { Component } from 'react';
import Header from './header';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bucketList, createBucket, deleteSingleBucket, updateSingleBucket, addToSingleBucketList, viewBucketList } from '../../stores/actions/bucketlists';
import MainBody from './mainbody';
import CreateModal from './createModal';
import DeleteModal from './deleteModal';
import EditModal from './editModal';
import AddToListModal from './addToListModal';
import ViewListModal from './viewListModal';


export class Dashboard extends Component {
  state = {
    modal: false,
    name: '',
    Dashboard: 'create',
    BucketId: '',
    BucketName: '',
    currentPage: 1
  };

    componentWillMount() { 
   if(!localStorage.getItem('jwToken')){
     this.props.history.push('/')
   }
  }

  componentDidMount() {
    if(localStorage.getItem('jwToken')){
      this.props.getBucketList();
    }
  }

  handleLogout(e){
    e.preventDefault()
    localStorage.removeItem('jwToken')
    if(!localStorage.getItem('jwToken')){
        this.props.history.push('/')
    }
  }
  
  async toggle(e='', state="", id="",names="") {
    id = e.target && e.target.id.split('||')[0]
    names = e.target && e.target.id.split('||')[1]
    if(state === "viewList"){
     const { viewLists } = this.props
     await viewLists(id)
    }
    this.setState(prev => ({
      modal: !prev.modal,
      name: names,
      Dashboard: state,
      BucketId: id,
      BucketName: names,
      searchName: ''
    }));
  }



  
  async handleCreate (e) {
    e.preventDefault();
    const { name } = this.state;
    const {createNewBucket, getBucketList } = this.props
    const details = { name };
    console.log(details);
    
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

  async handleInput(e){
    const {name, value } = e.target;
    const v = value.toUpperCase()
    this.setState({[name]: v});    
    if(name === 'searchName' && value.trim() !== ''){
       const { getBucketList } = this.props
       await getBucketList(1, `?q=${value.toUpperCase().trim()}`)
    } else{
      console.log(name);
      
      const { getBucketList } = this.props
      await getBucketList()
    }
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

  async handleAddToBucketList(e){
    e.preventDefault();
    const { BucketId, name } = this.state;
    const details =  { name }    
    const { addToBucketList } = this.props;
    await addToBucketList(BucketId, details);
    this.toggle()
  }

  async handleChangePage(e){
    const { getBucketList } = this.props;
    const { id } = e.target
    let index = parseInt(id, 10)
    if(e.target.id === 'next'){
     index = this.state.currentPage + 1
    }

    if(e.target.id === 'prev'){
      index = this.state.currentPage - 1
    }
    await getBucketList(index)
    this.setState({currentPage: index})

    
  }

  render() {
    const { modal, Dashboard, name,  BucketName } = this.state;
    const { SingleList } = this.props;

    let Modals;

    if (Dashboard === 'create') {
      Modals =  <CreateModal toggles={() => this.toggle()} handleInput={e => this.handleInput(e)} handleSubmit={e => this.handleCreate(e)}/> ;
    } else if(Dashboard === 'delete') {
      Modals = <DeleteModal toggles={() => this.toggle()} handleDelete={() => this.handleDelete()}/>;
    } else if(Dashboard === 'edit'){
      Modals =  <EditModal toggles={() => this.toggle()} handleInput={e => this.handleInput(e)} handleEdit={e => this.handleUpdateBucket(e)} value={name}/> ;
    } else if(Dashboard === 'addToList'){
      Modals = <AddToListModal toggles={() => this.toggle()} handleInput={e => this.handleInput(e)} name={BucketName} handleAddToList={e => this.handleAddToBucketList(e)} />
    } else if(Dashboard === 'viewList'){
      Modals = <ViewListModal toggles={() => this.toggle()} name={BucketName} lists={SingleList}/>
    }


    return (
      <section className="main">
         <Modal isOpen={modal} toggle={() => this.toggle()} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
           {Modals}
         </Modal>
        <Header name={this.props.user.lastname} logout={(e) => this.handleLogout(e)}/>
        <MainBody searchInputChange={e => this.handleInput(e)} create={(e, state) => this.toggle(e, 'create')} deleteM={(e, state) => this.toggle(e, 'delete')} editM={(e, state) => this.toggle(e, 'edit')} addToListM={(e, state) => this.toggle(e, 'addToList')} viewListM={(e, state) => this.toggle(e, 'viewList')} pageChange={e => this.handleChangePage(e)}/>
       
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  SingleList : state.buckets.bucketListItems,
  authenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  getBucketList: bucketList,
  createNewBucket: createBucket,
  deleteBucket: deleteSingleBucket,
  updateBucket: updateSingleBucket,
  addToBucketList: addToSingleBucketList,
  viewLists: viewBucketList
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
