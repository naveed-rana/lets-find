import { ADD_PERSON } from '../../actions/missingPersonAction';

import intialArray from '../../fakeArray';

const INITIAL_STATE = {
    homeStories: intialArray
};
console.log('Reducer: for all  ', INITIAL_STATE.homeStories)

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_PERSON:
            {
                // var list = state.homeStories;
                // console.log('Reducer: before ', state.homeStories)
                // var homeStories = list.concat([action.payload]);
                // console.log('Reducer: Middle ', homeStories)

                return { 
                    ...state,
                    homeStories: state.homeStories.concat([action.payload])
                }

            }


        default:
            return state;
    }
}

export default AddReducer;