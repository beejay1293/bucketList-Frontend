import React from 'react';
import TopContent from './topcontent';
import Lists from './bucketLists';




const MainBody = ({create, deleteM, editM, id}) => (
  <div className="main__body">
    <TopContent createBucket={create}/>
    <Lists delete={deleteM} edit={editM} />
  </div>
);

export default MainBody;
