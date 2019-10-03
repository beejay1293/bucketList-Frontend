import React from 'react';
import Moment from 'react-moment';
import {  Table, ModalHeader, ModalBody } from 'reactstrap';

const ViewListModal = ({toggles, handleInput, name, lists}) => (
    <React.Fragment>
    <ModalHeader toggle={toggles}>{name}</ModalHeader>
      <ModalBody>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Done</th>
            <th>Created</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
            {lists.map((li, index) => (
            <tr key={index}>
              <td>{li.name}</td>
              <td>false</td>
              <td>
              <Moment local format="LLLL">
                {li.date_created}
              </Moment>
              </td>
              <td>Edit</td>
              <td>Delete</td>
           </tr>
            )
            )}
        </tbody>
      </Table>
    </ModalBody>
   </React.Fragment>
)

export default ViewListModal