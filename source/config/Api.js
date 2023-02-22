import environments from './environments.json'
let env_index = 0


export default (() => {
 
  return {

     //authentication

     'MOBILE_SENT_OTP': environments[env_index].Domain+"auth/send-otp-to-mobile", 
     'EMAIL_SENT_OTP': environments[env_index].Domain+"auth/send-otp-to-email", 
     'OTP_VERIFY': environments[env_index].Domain+"auth/verify-otp",
     'USER_CHECK_VALIDATION': environments[env_index].Domain+"auth/checkuser",
   
    }

})()