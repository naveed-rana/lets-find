import { ADD_PERSON } from "../../actions/missingPersonAction";

import intialArray from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: [ {
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
},
{
    id: '3',
    image: '',
    status: 'Missing',
    name: 'Asif',
    age: 'teen',
    gender: 'male',
    location: 'Karachi',
    description: 'xyz',
    disability: 'mental',
    mobile: '+92 306 7134632',
    post_By: 'Naveed'
}]
};

function AddReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSON: {
     
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
