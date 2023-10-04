import { v4 as uuidv4 } from 'uuid';

const bookItems = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Grames',
    author: 'Sussan Collins',
    chapter: 'Chapter 17',
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herber',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the 21st Century',
    author: 'Sussan Collins',
    chapter: 'Introduction',
  },
];

const allbooks = [
  {
    itemId: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    itemId: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    itemId: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

export { bookItems, allbooks };
