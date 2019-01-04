import { ADD_PERSON } from "../../actions/missingPersonAction";

import intialArray from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: intialArray
};
console.log("Reducer: for all  ", INITIAL_STATE.homeStories);

function AddReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSON: {
      console.log("================from redu====================");
      console.log(action.data);
      console.log("====================================");
      var oldStories = [];
      oldStories = state.homeStories;
      oldStories.push(action.data);
      console.log("=============newstories=======================");
      console.log(oldStories);
      console.log("====================================");
     
     
     
      const newState = Object.assign({}, state, { homeStories: {
        id: '2',
        image: '',
        status: 'Found',
        name: 'Haseeba',
        age: 'teen',
        gender: 'female',
        location: 'Lahore',
        description: 'xyz',
        disability: 'mental',
        mobile: '+92 306 7134632',
        post_By: 'Fayyaz'
    }});
      console.log('New state:', newState);
      return newState;


        
      
    }

    default:
      return state;
  }
}

export default AddReducer;
