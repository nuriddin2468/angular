import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform to minutes', function () {
    expect(pipe.transform(50)).toBe('50 min');
  });

  it('should transform to hours', function () {
    expect(pipe.transform(70)).toBe('1h 10 min');
  });
});
