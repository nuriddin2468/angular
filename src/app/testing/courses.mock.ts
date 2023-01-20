import { Course } from '@modules/courses/types/course';

export const coursesMock: Course[] = [
  {
    id: 1,
    name: 'Video Course 1. Name tag',
    length: 123,
    date: '01/12/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    isTopRated: false
  },
  {
    id: 2,
    name: 'Video Course 2. Name tag',
    length: 220,
    date: '09/12/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    isTopRated: false
  },
  {
    id: 3,
    name: 'Video Course 3. Name tag',
    length: 16,
    date: '03/09/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    isTopRated: true
  }
]
