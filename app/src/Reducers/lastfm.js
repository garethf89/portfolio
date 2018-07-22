import {GET, SUCCESS, FAILURE} from '../Actions';
  
  const initialState = {
    albums: [],
    loading: false,
    error: null
  };
  
  export default function lastFmReducer(state = initialState, action) {
    const { type } = action;
    console.log(type);

    switch(type) {

      case GET:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case SUCCESS:
        return {
          ...state,
          loading: false,
          albums: action.payload
        };
  
      case FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          albums: []
        };
  
      default:
        return state;
    }
  }