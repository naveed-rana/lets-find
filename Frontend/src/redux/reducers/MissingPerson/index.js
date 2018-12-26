import { ADD_PERSON } from '../../actions/missingPersonAction';

import intialArray from '../../fakeArray';

const INITIAL_STATE = {
    homeStories:intialArray
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_PERSON:
            {
                var list = state.homeStories;
                var newList = list.concat([action.payload]);
                return {
                    ...state,
                    homeStories: newList
                }
            }


        default:
            return state;
    }
}

export default AddReducer;