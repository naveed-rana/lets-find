import { combineReducers } from 'redux';
import AddReducer from './MissingPerson';
import userReducer from './userReducer';
import SearchReducer from './searchReducer';
import colorReducer from './colorReducer';
const rootReducer = combineReducers({
        misingPersons:AddReducer,
        userReducer,
        SearchReducer,
        colorReducer
});

export default rootReducer;
