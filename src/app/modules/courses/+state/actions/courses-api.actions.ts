import { createAction, props } from '@ngrx/store';
import { Course } from '@modules/courses/types/course';

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

export const courseCreated = createAction(
  '[Courses API] Course created',
  props<{ course: Course }>()
);

export const courseUpdated = createAction(
  '[Courses API] Course updated',
  props<{ course: Course }>()
);

export const courseDeleted = createAction(
  '[Courses API] Course updated',
  props<{ course: Course }>()
);
