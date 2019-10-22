import {GET_LASTFM, SUCCESS_LASTFM, FAILURE_LASTFM} from '../Actions/ActionTypes';
  
  const initialState = {
    albums: [],
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    const { type } = action;

    switch(type) {

      case GET_LASTFM:
        return {
          ...state,
          loading: true,
          error: null,
          albums : []
        };
  
      case SUCCESS_LASTFM:
        return {
          ...state,
          loading: false,
          error: false,
          albums: action.payload.data.data.album
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