import React from 'react'
import {  ModalHeader, ModalBody, ModalFooter, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const EditModal = ({toggles, handleInput, handleEdit, value}) => (
  <React.Fragment>
    <ModalHeader toggle={toggles}>Update Bucket</ModalHeader>
      <ModalBody>
      <InputGroup>
         <InputGroupAddon addonType="prepend"><Button>Name</Button></InputGroupAddon>
         <Input className="inps" name="name" value={value} onChange={handleInput}/>
      </InputGroup>
    </ModalBody>
    <ModalFooter>
      <Button text="Delete" className="create_btn" onClick={handleEdit}>Update</Button>
{' '}
      <Button text="Cancel" className="cancel_btn" onClick={toggles} >Cancel</Button>
    </ModalFooter>
   </React.Fragment>
)

export default EditModal;