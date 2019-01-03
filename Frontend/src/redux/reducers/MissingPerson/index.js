import { ADD_PERSON } from "../../actions/missingPersonAction";

import intialArray from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: intialArray
};
console.log("Reducer: for all  ", INITIAL_STATE.homeStories);

function AddReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSON: {
      console.log("====================================");
      console.log("from reducer add" + action.data);
      console.log("====================================");

      var oldStories = state.homeStories;
      var newStories = oldStories.concat([action.data]);
      return {
        ...state,
        homeStories: newStories
      };
    }

    default:
      return state;
  }
}

export default AddReducer;
