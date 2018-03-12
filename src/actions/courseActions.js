import * as CONSTANSTS from '../lib/constants';

export function createCourse(course) {
  //debugger;
  return { type: CONSTANSTS.CREATE_COURSE, course };
}

export function updateCourse(course) {
  return { type: CONSTANSTS.EDIT_COURSE, course };
}
