import {combineReducers} from 'redux';
import { Menu } from "./menu-reducer";
import dataReducer  from './data-reducer';
import lastFmReducer  from './lastfm';

export const reducer = combineReducers({
  data: dataReducer,
  menu : Menu,
  lastFm: lastFmReducer
});
