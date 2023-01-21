import { createAction, props } from '@ngrx/store';
import { Course } from '@modules/courses/types/course';

export const enter = createAction('[Courses] Enter');

export const loadMoreCourses = createAction('[Courses] Load more courses');

export const editCourse = createAction(
  '[Courses] Edit course',
  props<{ course: Course }>()
);

export const deleteCourse = createAction(
  '[Courses] Delete',
  props<{ course: Course }>()
);

export const searchCourses = createAction(
  '[Courses] Search courses',
  props<{ searchText: string }>()
);

export const selectCourse = createAction(
  '[Courses] Select course',
  props<{ course: Course }>()
);
