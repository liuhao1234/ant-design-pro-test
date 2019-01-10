import { combineReducers } from 'redux';
import numReducer from './numReducer';

const allReducers = {
	numReducerState : numReducer 
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;