import environments from './environments.json'
let env_index = 2


export default (() => {
 
  return {

     //authentication

     'AUTH':api_token_dev,
     'USER_LOGIN': environments[env_index].Domain+"user/login/v2", 
   

      
       
    }

})()