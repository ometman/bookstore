import { v4 as uuidv4 } from 'uuid';

const bookItems = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Grames',
    author: 'Sussan Collins',
    chapter: 'Chapter 17',
    comments: [],
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herber',
    chapter: 'Chapter 3: "A Lesson Learned"',
    comments: [],
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the 21st Century',
    author: 'Sussan Collins',
    chapter: 'Introduction',
    comments: [],
  },
];

export default bookItems;
