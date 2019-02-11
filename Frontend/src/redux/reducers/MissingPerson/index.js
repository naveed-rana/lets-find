import { ADD_PERSON } from "../../actions/missingPersonAction";
import { MODIFY_PERSON } from "../../actions/missingPersonAction";
import { RESOLVED_CASES,GETLATESTSTORIESERROR,GETLATESTSTORIES,GETACTIVEPOSTS,GETACTIVEPOSTSERROR ,GETRESOLVEDPOSTS,GETRESOLVEDSERROR} from "../../actions/missingPersonAction";

import homeStories from "../../fakeArray";

const INITIAL_STATE = {
  homeStories: "Nill",
  homeStoriesError:'err',
  userStoriesError:'err',
  userResolvedError:'sdfa'
  ,
  UserPosts: [],
  ResolvedCases: []
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
      
      return{
        ...state,
        UserPosts: newList,
        ResolvedCases: state.ResolvedCases.concat([action.data])

      }
    }

    case GETLATESTSTORIESERROR:{
      return {
        ...state,
        homeStoriesError:action.payload
      }
    }

    case GETLATESTSTORIES:{
      return {
        ...state,
        homeStories:action.payload.output
      }
    }
    case GETACTIVEPOSTSERROR:{
      return {
        ...state,
        userStoriesError:action.payload
      }
    }


    case GETACTIVEPOSTS:{
      return {
        ...state,
        UserPosts:action.payload.output
      }
    }
    
    case GETRESOLVEDSERROR:{
      return {
        ...state,
        userResolvedError:action.payload
      }
    }

    case GETRESOLVEDPOSTS:{
      return {
        ...state,
        ResolvedCases:action.payload.output
      }
    }

    default:
      return state;
  }
}

export default AddReducer;
