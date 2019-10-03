import React from 'react';
import propTypes from 'prop-types';
import { Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const SingleMessage = ({
  name, created, deleteModal, id, editModal, addToListModal, viewListModal
}) => (
  <Col sm="3">
  <Card body className="text-center bucketCard">
    <div className="SingleList">
      <div>
        <div className="edit__icon" onClick={editModal} id={`${id}||${name}`} data-id={name}>
         
          <i className="far fa-edit" id={`${id}||${name}`} data-id={name}/>
        </div>
      </div>
      <div> 
        <div className="delete__icon" onClick={deleteModal} id={id} >
          <i className="fas fa-trash-alt" id={id} />
        </div>
      </div>
    </div>
    <CardTitle>{name}</CardTitle>
    <CardText>Created on {created}.</CardText>
    <Button onClick={addToListModal} id={`${id}||${name}`}>Add to List</Button>
    <Button onClick={viewListModal} id={`${id}||${name}`}>View List</Button>
  </Card>
</Col>
);

SingleMessage.propTypes = {
  name: propTypes.string.isRequired,
  created: propTypes.shape({})
};
export default SingleMessage;
