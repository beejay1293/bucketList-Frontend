import React from 'react'
import {  ModalHeader, ModalBody, ModalFooter, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const CreateModal = ({toggles, handleInput, handleSubmit}) => (
  <React.Fragment>
    <ModalHeader toggle={toggles}>Create Bucket</ModalHeader>
      <ModalBody>
      <InputGroup>
         <InputGroupAddon addonType="prepend"><Button>Name</Button></InputGroupAddon>
         <Input placeholder="eg. Birthday Plans" className="inps" name="name" onChange={handleInput}/>
      </InputGroup>
    </ModalBody>
    <ModalFooter>
      <Button text="Delete" className="create_btn" onClick={handleSubmit}>Create</Button>
{' '}
      <Button text="Cancel" className="cancel_btn" onClick={toggles} >Cancel</Button>
    </ModalFooter>
   </React.Fragment>
)

export default CreateModal;