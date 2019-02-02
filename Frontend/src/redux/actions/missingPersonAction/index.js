import axios from "axios";
import EndPoint from '../../../endpoint/';
export const GETLATESTSTORIES = 'GetStories';
export const GETLATESTSTORIESERROR = 'GetStoriesERROR';
export const ADD_PERSON = 'ADD_PERSON';

export const MODIFY_PERSON = "MODIFY_PERSON"
export const RESOLVED_CASES = "RESOLVED_CASES"


export const GETACTIVEPOSTS = "GETACTIVEPOSTS"
export const GETACTIVEPOSTSERROR = "GETACTIVEPOSTSERROR"


// fetch all todos from indexedDB in the form of array

export function getHomeStories() {
  return (dispatch) => {

            axios.get(EndPoint+'/homeStories')
            .then((res)=>{
                
                if (res.data.output[0].id){
                dispatch({
                    type:GETLATESTSTORIES,
                    payload:res.data
                })
            }
            else{
                dispatch({
                    type:GETLATESTSTORIESERROR,
                    payload:new Date()
                })
            }
            })
            .catch((err)=>{
                dispatch({
                    type:GETLATESTSTORIESERROR,
                    payload:new Date()
                })
            })

  };
}

//Get Active Posts
export function getActivePost(cell) {
    return (dispatch) => {

              axios.get(EndPoint+'/activeStories',{ params: {data:`${cell}`}})
              .then((res)=>{
                  dispatch({
                      type:GETACTIVEPOSTS,
                      payload:res.data
                  })
              
              })
              .catch((err)=>{
                  console.log(err);
                  dispatch({
                      type:GETACTIVEPOSTSERROR,
                      payload:new Date()
                  })
              })
    };
  }



//Call Reducer

export function addPerson(data) {
    console.log('from Action: ', data);
    return {
        type: ADD_PERSON,
        data: data
    }
}



export function modifyPerson(data){
    console.log(data);
    return{
        type: MODIFY_PERSON,
        data: data,
    }
}
export function resolvedCases(data){
    console.log('===================from action=================');
    console.log(data);
    return{
        type: RESOLVED_CASES,
        data: data,
    }
}


// dispatch({
//     type: GETLATESTSTORIES,
//     payload: todos,
//   });