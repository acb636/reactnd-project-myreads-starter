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
]

export const get = (value) => (
  shelves.filter((shelf) => shelf.value === value).pop()
)

export const getAll = () => (shelves)