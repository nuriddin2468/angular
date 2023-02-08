import { Course } from '@modules/courses/types/course';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions, CoursesApiActions } from '@modules/courses/+state';
import { Author } from '@modules/courses/types/author';
import { cloneDeep } from '@shared/utils/utils';

const addMoreCourses = (oldCourses: Course[], newCourses: Course[]) => [...oldCourses, ...newCourses];
const deleteCourse = (courses: Course[], course: Course) => courses.filter(oldCourse => oldCourse.id !== course.id);

export interface State {
  courses: Course[];
  authors: Author[];
  selectedCourse: Course | null;
}

export const initialState: State = {
  courses: [],
  authors: [],
  selectedCourse: null
};

export const reducer = createReducer(
  initialState,
  on(CoursesActions.enterToAddEditCoursePage, (state) => {
    return {
      ...state,
      selectedCourse: null
    };
  }),
  on(CoursesApiActions.coursesLoaded, (state, action) => {
    return {
      ...state,
      courses: action.courses
    };
  }),
  on(CoursesApiActions.coursesLoadedMore, (state, action) => {
    return {
      ...state,
      courses: addMoreCourses(state.courses, action.courses)
    };
  }),
  on(CoursesApiActions.courseDeleted, (state, action) => {
    return {
      ...state,
      courses: deleteCourse(state.courses, action.course)
    };
  }),
  on(CoursesApiActions.coursesSearched, (state, action) => {
    return {
      ...state,
      courses: action.courses
    };
  }),
  on(CoursesApiActions.enteredToAddEditCourses, (state, action) => {
    return {
      ...state,
      selectedCourse: action.course,
      authors: action.authors
    };
  })
);

export const selectAllCourses = (state: State) => state.courses;
export const selectSelectedCourse = (state: State) => {
  const selectedCourse = cloneDeep(state.selectedCourse);
  if (selectedCourse === null) return null;
  // Authors addressing to the same point
  selectedCourse.authors = state.authors.filter(
    author => selectedCourse.authors.findIndex(x => x.id === author.id) !== -1
  );
  return selectedCourse;
};
export const selectAuthors = (state: State) => state.authors;
