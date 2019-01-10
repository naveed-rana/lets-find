import { ADD_PERSON } from "../../actions/missingPersonAction";
import { MODIFY_PERSON } from "../../actions/missingPersonAction";
import { RESOLVED_CASES } from "../../actions/missingPersonAction";

import homeStories from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: homeStories,

  UserPosts: [
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
<<<<<<< HEAD
  ] 
=======
  ],
  ResolvedCases: [
    {
      id: "2",  
      image: "",
      status: "Resoloved",
      name: "Haseeba",
      age: "teen",
      gender: "female",
      location: "Lahore",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Fayyaz"
    },
  ]
>>>>>>> e56fdba366495aa034fa9de7b4adee5f15a22313
};

function AddReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_PERSON: {
      return {
        ...state,
        UserPosts: state.UserPosts.concat([action.data])
      };
    }
    case MODIFY_PERSON: {
      let updateState = state.UserPosts;
      let id = action.data.id;
      console.log("id" + id);
      
      let newList = updateState.filter(item => item.id != id);
      newList.unshift(action.data);
<<<<<<< HEAD
      
=======
     
>>>>>>> e56fdba366495aa034fa9de7b4adee5f15a22313

      return {
        ...state,
        UserPosts: newList
      };
    }

    case RESOLVED_CASES:{
      let updateState = state.UserPosts;
      let id = action.data.id;
      console.log("id" + id);
      
      let newList = updateState.filter(item => item.id != id);
      console.log('=============from resolved reducer=======================');
      console.log(newList);
      console.log('====================================');
      
      return{
        ...state,
        UserPosts: newList,
        ResolvedCases: state.ResolvedCases.concat([action.data])

      }
    }

    default:
      return state;
  }
}

export default AddReducer;
