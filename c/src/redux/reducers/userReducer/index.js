import { GETUSER,USERLOGOUT,USERREGESTER } from "../../actions/UserActions";

const INITIAL_STATE = {
  user:{},
  userStatus:false,
  registerLoader:'intial'
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETUSER: {
       if (action.payload._id){
        return {
          ...state,
          userStatus:true,
          user:action.payload
        }
       } else {
        return state;
       } 
    }

    case USERLOGOUT:{
       return {
         ...state,
         user:{},
         userStatus:false
       }
    }

    case USERREGESTER:{
      // alert(action.payload);
      console.log('reducer payload',action.payload);
      
      return {
        ...state,
        registerLoader:'after action call'
      }

    }

    default:
      return state;
  }
}

export default userReducer;
