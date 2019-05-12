import * as actionType from './ActionTypes';

export const toggleMenu = (direction) => ({
  type: actionType.TOGGLE,
  payload: direction
});