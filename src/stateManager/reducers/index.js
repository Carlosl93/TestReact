import { combineReducers } from 'redux';
import TasksReducer from './tasks';
import FilterReducer from './filter';

const reducer = combineReducers({
    TasksReducer,
    FilterReducer,
});

export default reducer;