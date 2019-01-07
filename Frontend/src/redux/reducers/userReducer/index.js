import { GETUSER,USERLOGOUT,USERREGESTER } from "../../actions/UserActions";

const INITIAL_STATE = {
  user:{},
  userStatus:true,
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
      console.log('from reducer',action.payload);
         
      return {
        ...state,
        registerLoader:'some'
      }

    }

    default:
      return state;
  }
}

export default userReducer;
