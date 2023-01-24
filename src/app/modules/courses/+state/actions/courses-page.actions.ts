import { createAction, props } from '@ngrx/store';
import { Course } from '@modules/courses/types/course';

export const enterToCoursesPage = createAction('[Courses] Enter to courses page');
export const loadMoreCourses = createAction('[Courses] Load more courses');

export const updateCourse = createAction(
  '[Courses] Edit course',
  props<{ course: Course }>()
);

export const deleteCourse = createAction(
  '[Courses] Delete course',
  props<{ course: Course }>()
);

export const searchCourses = createAction(
  '[Courses] Search courses',
  props<{ searchText: string }>()
);

export const enterToAddEditCoursePage = createAction(
  '[Courses] Enter to add-edit-course page',
  props<{ courseId: string | number | null }>()
);

export const createCourse = createAction(
  '[Courses] Create course',
  props<{course: Omit<Course, 'id'>}>()
)
