import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/products" activeClassName="active">Products</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/comments" activeClassName="active">Comments</Link>
      {" | "}
      <Link to="/blogs" activeClassName="active">Blogs</Link>
      {" | "}
      <Link to="/login" activeClassName="active">Log In</Link>
      {" | "}
      <Link to="/sample" activeClassName="active">Sample</Link>
      {" | "}
    </nav>
  );
};

export default Header;
