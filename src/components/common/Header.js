import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDot from './LoadingDot';

const Header = ({loading}) => {
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
      {/* <Link to="/sample" activeClassName="active">Sample</Link> */}
      {/* {" | "} */}
      <LoadingDot interval={100} dots={10} loading={loading}/>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
