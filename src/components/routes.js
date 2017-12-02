import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import CoursesPage from '../components/course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import ManageAuthorPage from './authors/ManageAuthorPage';
import AuthorPage from './authors/AuthorPage';

export default (
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="about" component={AboutPage} />
      <Route path="courses" components={CoursesPage}/>
      <Route path="addCourse" components={ManageCoursePage}/>
      <Route path="authors" components={AuthorPage}/>
      <Route path="addAuthor" components={ManageAuthorPage}/>
		</Route>
	);
