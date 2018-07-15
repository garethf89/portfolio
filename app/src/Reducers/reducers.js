import {combineReducers} from 'redux';
import { Menu } from "./menu-reducer";

export const reducer = combineReducers({
  menu : Menu
});
