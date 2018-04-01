import expect from 'expect';
import * as courseActions from './courseActions';
import * as CONSTANSTS from '../lib/constants';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id:'clean-code', title:'Clean Code'};

            const expectedAction = {
                type: CONSTANSTS.CREATE_COURSE_SUCCESS,
                course: course
            };

            const action = courseActions.createCourseSuccess(course);

            // assert
            expect(action).toEqual(expectedAction);
        });
    });
});