import { createAction } from "@reduxjs/toolkit";

//Get user details
export const getUserRequest = createAction('GET_USER_REQUEST')
export const getUserSuccess = createAction('GET_USER_SUCCESS')
export const getUserFailure = createAction('GET_USER_FAILURE')


// export const addUserAction = (user) => {
//     return {
//       type: "REGISTER",
//       payload: {
//        email : user.email,
//        password : user.password
//       }
//     }
//   }