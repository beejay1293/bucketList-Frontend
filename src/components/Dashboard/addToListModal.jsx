import React from 'react';
import {  ModalHeader, ModalBody, ModalFooter, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const AddToListModal = ({toggles, handleInput, handleAddToList, name}) => (
    <React.Fragment>
    <ModalHeader toggle={toggles}>Add To "{name}" BucketList</ModalHeader>
      <ModalBody>
      <InputGroup>
         <InputGroupAddon addonType="prepend"><Button>Name</Button></InputGroupAddon>
         <Input placeholder="eg. Go to the market on thursday" className="inps" name="name" onChange={handleInput}/>
      </InputGroup>
    </ModalBody>
    <ModalFooter>
      <Button text="Delete" className="create_btn" onClick={handleAddToList}>Add</Button>
{' '}
      <Button text="Cancel" className="cancel_btn" onClick={toggles} >Cancel</Button>
    </ModalFooter>
   </React.Fragment>
)

export default AddToListModal;