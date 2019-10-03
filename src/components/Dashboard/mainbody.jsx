import React from 'react';
import TopContent from './topcontent';
import Lists from './bucketLists';





const MainBody = ({create, deleteM, editM, addToListM, viewListM, id, searchInputChange, pageChange }) => (
  <div className="main__body">
    <TopContent createBucket={create} inputChange={searchInputChange}/>
    <Lists delete={deleteM} edit={editM} addToList={addToListM} viewList={viewListM} changeP={pageChange} />

  </div>
);

export default MainBody;
