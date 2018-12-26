import { combineReducers } from 'redux';
import TodoReducers from './MissingPerson';

const rootReducer = combineReducers({
        TodoApp:TodoReducers,
});

export default rootReducer;
