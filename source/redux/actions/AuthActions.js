import { loginUser } from '../../config/services/AuthServices'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../Types';



export const login = (params) => {
   console.log('params for signin',params)
   return (dispatch) => {
      return loginUser(params).then(res => {
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


