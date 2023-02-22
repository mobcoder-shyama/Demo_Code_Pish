import { loginUser,mobileSentOTP,emailSentOTP,otpVerify,checkUserExist } from '../../config/services/AuthServices'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../Types';


// Marks :- OTP send via mobile number

export const mobileOTP = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return mobileSentOTP(params).then(res => {
         console.log("res------",res)
         if (res?.code === '200') {
            dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.data });
            return res?.code;
         }
         else {
            dispatch({ type: LOGIN_FAILURE, payload: res?.data });
            return res?.data
         }
      }).catch(e => {
         console.log("error------",e)

      })
   };
}


// Marks :- OTP send via email address

export const emailOTP = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return emailSentOTP(params).then(res => {
         console.log("res------ code",res?.data,"---",res?.data?.code)
         if (res?.data?.code === '200') {
            dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.data });
            return res?.data;
         }
         else {
            dispatch({ type: LOGIN_FAILURE, payload: res?.data });
            return res?.data
         }
      }).catch(e => {
         console.log("error------",e)

      })
   };
}

// Marks :- OTP code verification for both email and mobile number

export const otpCodeVerify = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return otpVerify(params).then(res => {
         console.log("res------ code",res?.data,"---",res?.data?.code)
         if (res?.data?.code === '200') {
            dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.data });
            return res?.data;
         }
         else {
            dispatch({ type: LOGIN_FAILURE, payload: res?.data });
            return res?.data
         }
      }).catch(e => {
         console.log("error------",e)

      })
   };
}

// Marks :- check user exist or not before

export const checkUserValidate = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return checkUserExist(params).then(res => {
         console.log("res------ code",res?.data,"---",res?.data?.code)
         if (res?.data?.code === '200') {
            dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.data });
            return res?.data;
         }
         else {
            dispatch({ type: LOGIN_FAILURE, payload: res?.data });
            return res?.data
         }
      }).catch(e => {
         console.log("error------",e)

      })
   };
}





