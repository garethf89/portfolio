import {GET_LASTFM, SUCCESS_LASTFM, FAILURE_LASTFM} from '../Actions/ActionTypes';

import lastFmService from '../Services/LastFM';

const lfmService = new lastFmService();

export function loginError(error) {
    return { type: FAILURE_LASTFM, payload: error};
}
  
export function loginSuccess(response) {
  return { type: SUCCESS_LASTFM, payload: response };
}
  
  export function loginRequest() {
    return {type: GET_LASTFM };
  }


export const requestLastFm = (dispatch) => {

  dispatch(loginRequest());

  return lfmService.getAlbums().then(response => {
    if(response.data){
      dispatch(loginSuccess(response));
      return;
    }

    dispatch(loginError());

  }).catch((error) => {
    dispatch(loginError(error));
  });
 
};