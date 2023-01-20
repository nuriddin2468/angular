import { Author } from '@modules/courses/types/author';

export interface Course {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: Author[];
  isTopRated: boolean;
}
