import { createAction, props } from '@ngrx/store';
import { Course } from '@modules/courses/types/course';
import { Author } from '@modules/courses/types/author';

export const coursesLoaded = createAction(
  '[Courses API] Courses loaded success',
  props<{ courses: Course[] }>()
);

export const coursesLoadedMore = createAction(
  '[Courses API] Courses loaded more',
  props<{ courses: Course[] }>()
);

export const coursesSearched = createAction(
  '[Courses API] Courses searched',
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  '[Courses API] Course updated',
  props<{ course: Course }>()
);

export const courseDeleted = createAction(
  '[Courses API] Course updated',
  props<{ course: Course }>()
);

export const enteredToAddEditCourses = createAction(
  '[Courses API] Course selected',
  props<{ course: Course, authors: Author[] }>()
)
