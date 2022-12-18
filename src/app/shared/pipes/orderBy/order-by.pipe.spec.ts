import { OrderByPipe } from './order-by.pipe';
import { coursesMock } from '@app/testing/courses.mock';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  })

  it('create an instance', () => {
    pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order courses by creation date by asc', function () {
    const courses = [...coursesMock];
    const orderedCourses = new OrderByPipe().transform(courses);
    expect(orderedCourses[0].id).toBe(2);
  });

  it('should order course by create date by desc', function () {
    const courses = [...coursesMock];
    const orderedCourses = new OrderByPipe().transform(courses, 'desc');
    expect(orderedCourses[0].id).toBe(3);
  });
});
