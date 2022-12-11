import { FilterPipe } from './filter.pipe';
import { coursesMock } from '@app/testing/courses.mock';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should find course', function () {
    const item = pipe.transform(coursesMock, '1');
    expect(item.length).toBe(1);
  });

  it('should return empty array', function () {
    const item = pipe.transform(coursesMock, '15');
    expect(item.length).toBe(0);
  });
});
