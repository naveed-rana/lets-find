import { combineReducers } from 'redux';
import AddReducer from './MissingPerson';
import userReducer from './userReducer';
import SearchReducer from './searchReducer'
const rootReducer = combineReducers({
        misingPersons:AddReducer,
        userReducer,
        SearchReducer
});

export default rootReducer;
