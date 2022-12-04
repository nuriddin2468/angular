import { OrderByPipe } from './order-by.pipe';
import { coursesMock } from '@app/testing/courses.mock';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order courses', function () {
    const courses = [...coursesMock];
    const orderedCourses = new OrderByPipe().transform(courses);
  });
});
