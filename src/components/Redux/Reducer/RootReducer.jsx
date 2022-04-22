import {combineReducers}from 'redux';
import { DataReducer } from './dataReducer';


export default combineReducers({
    list:DataReducer,

})