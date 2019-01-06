import { combineReducers } from 'redux';
import AddReducer from './MissingPerson';
import userReducer from './userReducer';

const rootReducer = combineReducers({
        misingPersons:AddReducer,
        userReducer
});

export default rootReducer;
