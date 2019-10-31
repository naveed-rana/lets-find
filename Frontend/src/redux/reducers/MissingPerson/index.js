import { ADD_PERSON } from "../../actions/missingPersonAction";
import { MODIFY_PERSON } from "../../actions/missingPersonAction";
import { 
  RESOLVED_CASES,
  GETLATESTSTORIESERROR,
  GETLATESTSTORIES,
  GETACTIVEPOSTS,
  GETACTIVEPOSTSERROR,
  GETRESOLVEDPOSTS,
  GETRESOLVEDSERROR,
  NOTIFICATION,
  REGISTER_MISSING_PERSON,
  REGISTER_MISSING_PERSON_ERR,
  RESET_REGISTER_MISSING_PERSON_STATUS
} from "../../actions/missingPersonAction";


const INITIAL_STATE = {
  homeStories: [],
  UserPosts: [],
  ResolvedCases: [],
  userNotification:[],
  loader: new Date(),
  homeStoriesError:'err',
  userStoriesError:'err',
  userResolvedError:'sdfa',
  registerMissingPersonStatus: "not done"
};

function AddReducer(state = INITIAL_STATE, action) {

  switch (action.type) {

    case REGISTER_MISSING_PERSON: {
      return {
        ...state,
        loader: new Date(),
        registerMissingPersonStatus: "done",
      }
    }

    case REGISTER_MISSING_PERSON_ERR: {
      return {
        ...state,
        loader: new Date(),
        registerMissingPersonStatus: "error"
      }
    }

    case RESET_REGISTER_MISSING_PERSON_STATUS: {
      return {
        ...state,
        loader: new Date(),
        registerMissingPersonStatus: "not done"
      }
    }

    case NOTIFICATION: {
      return {
        ...state,
        userNotification:action.payload
      }
    }

    case ADD_PERSON: {
      return {
        ...state,
        loader: new Date(),
        UserPosts: state.UserPosts.concat([action.data]),
        homeStories: state.homeStories.push(action.data)
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

    case RESOLVED_CASES: {
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

    case GETLATESTSTORIESERROR: {
      return {
        ...state,
        homeStoriesError:action.payload
      }
    }

    case GETLATESTSTORIES: {
      return {
        ...state,
        homeStories:action.payload.output
      }
    }

    case GETACTIVEPOSTSERROR: {
      return {
        ...state,
        userStoriesError:action.payload
      }
    }

    case GETACTIVEPOSTS: {
      return {
        ...state,
        UserPosts:action.payload.output
      }
    }
    
    case GETRESOLVEDSERROR: {
      return {
        ...state,
        userResolvedError:action.payload
      }
    }

    case GETRESOLVEDPOSTS: {
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
