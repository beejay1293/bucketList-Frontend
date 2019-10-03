import React from 'react';
import {  ModalHeader, ModalBody, ModalFooter, Button,  } from 'reactstrap';



const deleteModal = ({toggles, handleDelete}) => (
    <React.Fragment>
    <ModalHeader toggle={toggles}>Delete Bucket</ModalHeader>
      <ModalBody>
      Are you sure?
    </ModalBody>
    <ModalFooter>
      <Button text="Delete" className="create_btn" onClick={handleDelete}>Delete</Button>
{' '}
      <Button text="Cancel" className="cancel_btn" onClick={toggles} >Cancel</Button>
    </ModalFooter>
   </React.Fragment>
)

export default deleteModal;