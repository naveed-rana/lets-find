import Axios from "axios";
import EndPoint from '../../../endpoint/';
export const GETLATESTSTORIES = 'GetStories';


// fetch all todos from indexedDB in the form of array

export function getHomeStories() {
  return (dispatch) => {
  
        Axios.get(EndPoint+'/homeStories')
        .then((res)=>{
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
        })

  };
}


// dispatch({
//     type: GETLATESTSTORIES,
//     payload: todos,
//   });