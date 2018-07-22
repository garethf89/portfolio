import {GET, SUCCESS, FAILURE} from '../Actions/ActionTypes';

import lastFmService from '../Services/LastFM';

export function loginError(error) {
    return { error, type: FAILURE };
  }
  
  export function loginSuccess(response) {
    return dispatch => {
      dispatch({ response, type: SUCCESS });
    };
  }
  
  export function loginRequest(response) {
    return { response, type: GET };
  }


export const requestLastFm = (dispatch) => {
    console.log(lastFmService)
    return lastFmService.getAlbums().then(response => {
        console.log(response);
        dispatch(loginSuccess(response));
    })
};