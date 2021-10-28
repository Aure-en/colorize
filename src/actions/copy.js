export const ADD_COPY = 'ADD_COPY';
export const REMOVE_COPY = 'REMOVE_COPY';

export const addCopy = ({ x, y, id }) => ({
  type: ADD_COPY,
  x,
  y,
  id,
});

export const removeCopy = (id) => ({
  type: REMOVE_COPY,
  id,
});
