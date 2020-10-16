import {combineReducers} from 'redux';
import todo from 'airLiquide/src/services/Reducer/index';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
