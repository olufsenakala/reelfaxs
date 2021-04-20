import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner>
      <span>Loading ...</span>
    </Spinner>
  )
}

export default Loader