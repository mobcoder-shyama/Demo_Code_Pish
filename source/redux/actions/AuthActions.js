import { loginUser } from '../../config/services/AuthServices'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../Types';



export const login = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return loginUser(params).then(res => {
         if (res?.data?.status?.httpCode === '200') {
            dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.data });
            return res?.data;
         }
         else {
            dispatch({ type: LOGIN_FAILURE, payload: res?.data });
            return res?.data
         }
      }).catch(e => {
         if ( e?.response?.data?.status?.httpCode === "400") {
            return e?.response?.data?.status?.message
         }
         else {
            return "errorMessage";
         }

      })
   };
}


