import { COLORCHANGE } from "../../actions/colorActions";

const INITIAL_STATE = {
  color:'#34495e'
};

function colorReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
      
    case COLORCHANGE:{
      return {
        color:action.payload
      };
    }


    default:
      return state;
  }
}

export default colorReducer;
