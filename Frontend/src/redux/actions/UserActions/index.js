import axios from "axios";
import EndPoint from "../../../endpoint/";
import { Toast } from "native-base";

export const GETUSER = "GETUSER";
export const USERLOGOUT = "USERLOGOUT";
export const USERREGESTER = "USERREGESTER";

// fetch all todos from indexedDB in the form of array
export function getUser() {
  return dispatch => {
    axios
      .get(EndPoint + "/logginUserData")
      .then(res => {
        console.log("Res");
        console.log(res.data);

        dispatch({
          type: GETUSER,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("err");
        console.log(err);
      });
  };
}

// logout
export function userLogout() {
  return dispatch => {
    axios
      .post(EndPoint + "/logoutUser")
      .then(res => {
        console.log("Res");
        console.log(res.data);
        if (res.data === "Sucesfully logout") {
          Toast.show({
            text: "Sucesfully logout",
            buttonText: "ok",
            type: "success"
          });

          dispatch({
            type: USERLOGOUT,
            payload: res.data
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
        console.log("err");
        console.log(err);
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type: "danger"
        });
      });
  };
}

// register
export function registerUser(data) {
  console.log("data in action", data);

  return {
    type: USERREGESTER,
    payload: "error"
  };

  // return (dispatch) => {

  //       axios.post(EndPoint+'/registeruser',data)
  //       .then((res)=>{
  //           console.log('res',res);

  //           if (res.data === 'success'){

  //         Toast.show({
  //                 text: "Sucesfully Register",
  //                 buttonText: "ok",
  //                 type: "success"
  //               })

  //           dispatch({
  //              type: USERREGESTER,
  //              payload:'success',
  //             });
  //         }
  //         else {
  //             Toast.show({
  //                 position:'top',
  //                 text: "Error occoured! Try Again",
  //                 buttonText: "cancel",
  //                 type: "danger"
  //               })

  //           dispatch({
  //              type: USERREGESTER,
  //              payload:'error',
  //                });

  //         }

  //       })
  //       .catch((err)=>{
  //           console.log("err");
  //           console.log(err);
  //           Toast.show({
  //             position:'top',
  //             text: "Error occoured! Try Again",
  //             buttonText: "cancel",
  //             type: "danger"
  //           })

  //           dispatch({
  //             type: USERREGESTER,
  //             payload:'error'
  //            });
  //       })

  // };
}
