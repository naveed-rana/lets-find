import { ADD_PERSON } from "../../actions/missingPersonAction";
import { MODIFY_PERSON } from "../../actions/missingPersonAction";

import intialArray from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: [
    {
      id: "2",
      image: "",
      status: "Found",
      name: "Haseeba",
      age: "teen",
      gender: "female",
      location: "Lahore",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Fayyaz"
    },
    {
      id: "3",
      image: "",
      status: "Missing",
      name: "Asif",
      age: "teen",
      gender: "male",
      location: "Karachi",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Naveed"
    }
  ]
};

function AddReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSON: {
     
      return {
        ...state,
        homeStories: state.homeStories.concat([action.data])
      };
    }
    case MODIFY_PERSON:
    {
      let updateState = state.homeStories;
      let id = action.data.id;
      let newList = updateState.filter((item) => item.id != id);
      console.log('=================newList from reducer===================');
      console.log();
      console.log('====================================');
       newList.unshift(action.data);

 return ({
          ...state,
          homeStories: newList
      });
  }

    default:
      return state;
  }
}

export default AddReducer;
