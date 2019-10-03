import React from 'react';
import Compose from './compose';

const TopContent = ({createBucket, inputChange}) => (
  <div className="top-content">
    <Compose click={createBucket}/>
    <input className="first" placeholder="search" name = "searchName" onChange={inputChange}/>
  </div>
);

export default TopContent;
