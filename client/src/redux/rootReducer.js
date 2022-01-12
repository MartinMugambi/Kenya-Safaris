import {combineReducers} from 'redux';
import dataReducer from './posts/reducer'; 
const rootReducer = combineReducers({
   post: dataReducer,
  
});

export default rootReducer;