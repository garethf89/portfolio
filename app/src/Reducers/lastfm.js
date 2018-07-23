import {GET_LASTFM, SUCCESS_LASTFM, FAILURE_LASTFM} from '../Actions/ActionTypes';
  
  const initialState = {
    albums: [],
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    const { type } = action;
    console.log('WHAT@')
    console.log(action)
    console.log(type);
    
    switch(type) {

      case GET_LASTFM:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case SUCCESS_LASTFM:
        return {
          ...state,
          loading: false,
          albums: action.payload
        };
  
      case FAILURE_LASTFM:
        return {
          ...state,
          loading: false,
          error: action.payload,
          albums: []
        };
  
      default:
        return state;
    }
  };