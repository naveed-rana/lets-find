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
     
      
    console.log('================from reducer====================');
    console.log(state.homeStories.concat([action.data]));
    console.log('====================================');
      return { 
        ...state,
        homeStories: state.homeStories.concat([action.data])
    }


        
      
    }

    default:
      return state;
  }
}

export default AddReducer;
