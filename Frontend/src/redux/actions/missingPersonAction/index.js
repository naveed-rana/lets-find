import axios from "axios";
import {Toast} from 'native-base';;
import EndPoint from '../../../endpoint/';
export const GETLATESTSTORIES = 'GetStories';
export const GETLATESTSTORIESERROR = 'GetStoriesERROR';
export const ADD_PERSON = 'ADD_PERSON';

export const MODIFY_PERSON = "MODIFY_PERSON"
export const RESOLVED_CASES = "RESOLVED_CASES"


export const GETACTIVEPOSTS = "GETACTIVEPOSTS"
export const GETACTIVEPOSTSERROR = "GETACTIVEPOSTSERROR"

export const GETRESOLVEDPOSTS = "GETRESOLVEDPOSTS"
export const GETRESOLVEDSERROR = "GETRESOLVEDSERROR"
export const NOTIFICATION = "NOTIFICATION"


// fetch all todos from indexedDB in the form of array

export function getNotifications(data) {

    return {
        type:NOTIFICATION,
        payload:data
    }
    
}

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


  //Get Active Posts
export function getResolvedPost(userid) {

    return (dispatch) => {

              axios.get(EndPoint+'/getresolvedCases',{ params: {data:`${userid}`}})
              .then((res)=>{
                  console.log("resoleved res",res.data);
                  
                  dispatch({
                      type:GETRESOLVEDPOSTS,
                      payload:res.data
                  })
              
              })
              .catch((err)=>{
                  console.log("err from resolved cases",err);
                  dispatch({
                      type:GETRESOLVEDSERROR,
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
export function resolvedCases(dataPost){

    let data = {
        "case": dataPost
      };


    return (dispatch) => {
    
        axios
      .post(EndPoint + "/solvedCase",data)
      .then(res => {
        console.log("Res from sever");
        console.log(res.data);
        if (res.data == "success") {
          Toast.show({
            text: "Sucesfully Resolved Your Case",
            buttonText: "ok",
            type: 'success'
          });
          dispatch({
            type: RESOLVED_CASES,
            data: data,
        });

        } else {
          
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type: "danger"
        });

        }
       
      })
      .catch(err => {

       console.log(err);
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type: "danger"
        });


      });

       
    }
}


// dispatch({
//     type: GETLATESTSTORIES,
//     payload: todos,
//   });