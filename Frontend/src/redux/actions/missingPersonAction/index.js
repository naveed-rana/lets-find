import Axios from "axios";
import EndPoint from '../../../endpoint/';
export const GETLATESTSTORIES = 'GetStories';

export const ADD_PERSON = 'ADD_PERSON';


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




//Call Reducer

export function addPerson(data) {
    console.log('add person action file: ', data);
    return {
        type: ADD_PERSON,
        payload: data
    }
}


// dispatch({
//     type: GETLATESTSTORIES,
//     payload: todos,
//   });