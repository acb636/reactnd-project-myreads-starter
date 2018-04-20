/** Available shelves */
const shelves = [
  {
    description: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    description: 'Want to Read',
    value: 'wantToRead'
  },
  {
    description: 'Read',
    value: 'read'
  },
  {
    description: 'None',
    value: 'none'
  }
];

/**
 * Get the description of a shelf by its related value
 * @param {string} value
 */
export const get = (value) => (
  shelves.filter((shelf) => shelf.value === value).pop()
);

/**
 * Get all shelves
 */
export const getAll = () => (shelves);