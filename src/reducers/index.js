import { combineReducers } from 'redux';
import TodosReducer from './todos';
import FilterReducer from './filter';

const rootReducer = combineReducers({
    todos: TodosReducer,
    filter: FilterReducer
});

export default rootReducer;
