import { ADD_PERSON } from "../../actions/missingPersonAction";
import { MODIFY_PERSON } from "../../actions/missingPersonAction";
import { RESOLVED_CASES } from "../../actions/missingPersonAction";

import homeStories from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: homeStories,

  UserPosts: [
    {
      id: "2",  
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXov49V0vl3zSQGocwgBiOhf-I_iZqlf04-3FDfWnxNG91D64A",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6KBUnkn-CXS3hSl6h6hcS9x8sdwExNHGLELiyGYQANgR8NWrQ",
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
  ],
  ResolvedCases: [
    {
      id: "2",  
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSq1j44rF7Wqqh3pnvybMorUFbdzhBb-tpK6a6gbmGOYyk1Jrklw",
      status: "Resoloved",
      name: "Ali",
      age: "teen",
      gender: "male",
      location: "Lahore",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Fayyaz"
    },
  ]
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
