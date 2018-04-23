import React, {PropTypes} from 'react';
import Row from './row';
import Header from './header';
import Footer from './footer';

const Table = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
        {
          courses.map(course => <Row key={course.id} course={course}/>)
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  courses: PropTypes.array
};

export default Table;