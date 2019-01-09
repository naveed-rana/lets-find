import axios from "axios";
import EndPoint from '../../../endpoint/';
export const GETLATESTSTORIES = 'GetStories';

export const ADD_PERSON = 'ADD_PERSON';

export const MODIFY_PERSON = "MODIFY_PERSON"
export const RESOLVED_CASES = "RESOLVED_CASES"



// fetch all todos from indexedDB in the form of array

export function getHomeStories() {
  return (dispatch) => {

    // axios.post(EndPoint+'/logoutUser')
    //     .then((res)=>{
    //         console.log("Res");
    //         console.log(res.data);
            
    //     })
    //     .catch((err)=>{
    //         console.log("err");
    //         console.log(err);
    //     })

        // axios.get(EndPoint+'/logginUserData')
        // .then((res)=>{
        //     console.log("Res");
        //     console.log(res.data);
            
        // })
        // .catch((err)=>{
        //     console.log("err");
        //     console.log(err);
        // })

        // let data = {"user":{
        //     name:"umar",
        //     pass:'umar'
        //   }}
    
      
        //     axios.post(EndPoint+'/loginuser',data)
        //     .then((res)=>{
        //         console.log("Res");
        //         console.log(res.data);
                
        //     })
        //     .catch((err)=>{
        //         console.log("err");
        //         console.log(err);
        //     })


        
        
        


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