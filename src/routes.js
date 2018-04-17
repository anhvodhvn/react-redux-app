import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';

import HomePage from './components/home/HomePage';
import CoursePage from './components/course/CoursePage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ProductPage from './components/product/ProductPage';
import ManageProductPage from './components/product/ManageProductPage';
import CategoryPage from './components/category/CategoryPage';
import AboutPage from './components/about/AboutPage';

import SamplePage from './components/sample/SamplePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursePage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="products" component={ProductPage}/>
    <Route path="product" component={ManageProductPage} />
    <Route path="product/:id" component={ManageProductPage} />
    <Route path="categories" component={CategoryPage} />
    <Route path="about" component={AboutPage}/>
    <Route path="sample" component={SamplePage}/>
  </Route>
);
