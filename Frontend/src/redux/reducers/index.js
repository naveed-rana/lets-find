import { combineReducers } from 'redux';
import TodoReducers from './MissingPerson';

const rootReducer = combineReducers({
        misingPersons:TodoReducers,
});

export default rootReducer;
