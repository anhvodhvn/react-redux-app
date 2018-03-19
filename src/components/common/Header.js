import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

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
    </nav>
  );
};

export default Header;
