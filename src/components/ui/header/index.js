import React from 'react';

import Nav from '../nav';
import './styles.scss';

const header = ({ isOpen }) => {
  return (
    <header className={`header ${isOpen ? '_show' : ''}`}>
      <Nav />
    </header>
  );
};

export default header;
