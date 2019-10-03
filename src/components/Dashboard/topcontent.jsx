import React from 'react';
import Compose from './compose';

const TopContent = ({createBucket}) => (
  <div className="top-content">
    <Compose click={createBucket}/>
    <input className="first" placeholder="search"/>
  </div>
);

export default TopContent;
