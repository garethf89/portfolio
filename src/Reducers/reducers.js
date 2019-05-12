import {combineReducers} from 'redux';
import { Menu } from "./menu-reducer";
import lastFmReducer  from './lastfm';

export const reducer = combineReducers({
  menu : Menu,
  lastFm: lastFmReducer
});
