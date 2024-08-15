import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Search=()=> {
  return (
    <MDBInputGroup>
      <MDBInput label='Search' className='searchInput' />
      <MDBBtn rippleColor='dark' className='searchButton'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
  );
}

export default Search;
