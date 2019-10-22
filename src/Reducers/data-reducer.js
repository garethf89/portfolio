import {GET_DATA, SUCCESS_DATA, FAILURE_DATA} from '../Actions/ActionTypes';
  
  const initialState = {
    loading: true,
    data: {}
  };
  
export default (state = initialState, action) => {

    const { type, payload } = action;

    switch(type) {

      case GET_DATA:
        return {
          ...state,
          loading: true,
          data: null
        };
  
      case SUCCESS_DATA:
        return {
          ...state,
          loading: false,
          data: payload
        };
  
      case FAILURE_DATA:
        return {
          ...state,
          loading: false,
          data: null
        };
  
      default:
        return state;
    }
  };