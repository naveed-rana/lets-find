import { ADD_TODO } from '../../actions/missingPersonAction';

const INITIAL_STATE = {
    homeStories:[]
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_TODO:
            {
                var list = state.todoList;
                var newList = list.concat([action.payload]);
                return {
                    ...state,
                    todoList: newList
                }
            }


        default:
            return state;
    }
}

export default AddReducer;