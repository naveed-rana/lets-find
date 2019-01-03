import { combineReducers } from 'redux';
import AddReducer from './MissingPerson';

const rootReducer = combineReducers({
        misingPersons:AddReducer,
});

export default rootReducer;
