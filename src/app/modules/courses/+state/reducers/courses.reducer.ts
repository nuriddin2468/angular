import { Course } from '@modules/courses/types/course';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions, CoursesApiActions } from '@modules/courses/+state/actions';

const addMoreCourses = (oldCourses: Course[], newCourses: Course[]) => [...oldCourses, ...newCourses];
const addNewCourse = (courses: Course[], course: Course) => [...courses, course];
const updateCourse = (courses: Course[], course: Course) => courses.map(
  oldCourse => oldCourse.id === course.id ? Object.assign({}, oldCourse, course) : oldCourse
);

const deleteCourse = (courses: Course[], course: Course) => courses.filter(oldCourse => oldCourse.id !== course.id);

export interface State {
  collection: Course[];
}

export const initialState: State = {
  collection: []
};

export const reducer = createReducer(
  initialState,
  on(CoursesActions.enter, (state) => {
    return {
      ...state
    };
  }),
  on(CoursesActions.loadMoreCourses, (state) => {
    return {
      ...state
    };
  }),
  on(CoursesActions.searchCourses, (state, action) => {
    return {
      ...state
    };
  }),
  on(CoursesApiActions.coursesLoaded, (state, action) => {
    return {
      ...state,
      collection: action.courses
    };
  }),
  on(CoursesApiActions.coursesLoadedMore, (state, action) => {
    return {
      ...state,
      collection: addMoreCourses(state.collection, action.courses)
    };
  }),
  on(CoursesApiActions.courseCreated, (state, action) => {
    return {
      ...state,
      collection: addNewCourse(state.collection, action.course)
    };
  }),
  on(CoursesApiActions.courseUpdated, (state, action) => {
    return {
      ...state,
      collection: updateCourse(state.collection, action.course)
    };
  }),
  on(CoursesApiActions.courseDeleted, (state, action) => {
    return {
      ...state,
      collection: deleteCourse(state.collection, action.course)
    };
  }),
  on(CoursesApiActions.coursesSearched, (state, action) => {
    return {
      ...state,
      collection: action.courses
    };
  })
);

export const selectAll = (state: State) => state.collection;
