import { Course } from '@modules/courses/types/course';

export const coursesMock: Course[] = [
  {
    id: 1,
    title: 'Video Course 1. Name tag',
    duration: 123,
    creationDate: '12/01/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
  },
  {
    id: 2,
    title: 'Video Course 2. Name tag',
    duration: 220,
    creationDate: '12/09/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
  },
  {
    id: 3,
    title: 'Video Course 3. Name tag',
    duration: 16,
    creationDate: '09/03/2022',
    description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    topRated: true
  }
]
