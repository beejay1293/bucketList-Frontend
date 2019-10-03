import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = ({items, changePage}) => (
    <Pagination aria-label="Page navigation example" size="sm" >
      <PaginationItem disabled id={1} onClick={changePage}>
          <PaginationLink first href="#" id={1} onClick={changePage}/>
      </PaginationItem>
       <PaginationItem disabled id="prev" onClick={changePage}>
          <PaginationLink previous href="#" id="prev" onClick={changePage}/>
       </PaginationItem>
     
          { 
            [...Array(items)].map((e, i) => {
                return  <PaginationItem key={i} id={i + 1} onClick={changePage}>
                <PaginationLink id={i + 1}>
                  {i + 1}
                </PaginationLink>
               </PaginationItem>
              })
        }
        
        <PaginationItem id="next" onClick={changePage}>
          <PaginationLink next id="next" onClick={changePage}/>
        </PaginationItem>
        <PaginationItem id={items} onClick={changePage}>
          <PaginationLink last id={items}/>
        </PaginationItem>
      </Pagination>
)

export default Paginate