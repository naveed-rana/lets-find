import { GETUSER,USERLOGOUT,USERREGESTER,USERLOGINERROR,USERLOGIN } from "../../actions/UserActions";

const INITIAL_STATE = {
  user:{},
  // user managed temporarily
  userStatus:false,
  registerLoader:'intial',
  loginLoader:'USERLOGINERROR'
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
         
      return {
        ...state,
        registerLoader:action.payload
      }

    }

    case USERLOGIN :{

      if (action.payload._id){
        return {
          ...state,
          userStatus:true,
          user:action.payload,
          loginLoader:'move'
        }
       } else {
        return {
          ...state,
          loginLoader:Math.random()
        };
       }

    }
    
    case USERLOGINERROR:{
      return {
        ...state,
        loginLoader:Math.random()
      };
    }


    default:
      return state;
  }
}

export default userReducer;
