import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDot from './LoadingDot';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Course</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/sample" activeClassName="active">Sample</Link>
      {" | "}
      <LoadingDot interval={100} dots={10}/>
    </nav>
  );
};

export default Header;
