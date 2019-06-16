import dataService from '../Services/Data';
import {GET_DATA, SUCCESS_DATA, FAILURE_DATA} from '../Actions/ActionTypes';

const dataFetcher = new dataService();

export function dataError(error) {
  return { type: FAILURE_DATA, payload: error};
}

export function dataSuccess(response) {
return { type: SUCCESS_DATA, payload: response };
}

export function dataRequest() {
return {type: GET_DATA };
}

export const requestData = (dispatch) => {

  dispatch(dataRequest());

  return dataFetcher.getData().then(response => {
    console.log(response)
    if(response){
      dispatch(dataSuccess(response));
      return;
    }

    dispatch(dataError({
      error : 'No data'
    }));

  }).catch((error) => {
    dispatch(dataError(error));
  });
 
};