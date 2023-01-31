export function validEmail(emailText){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(emailText) === false)
    {
        return false;
    }
    else {
      return true;
    }
}

export function validPhoneNumber(phonenumber){
    console.warn("phone",phonenumber)
    if (phonenumber.length>8){
        return false;
    } else {
        return true;
    }

}

export function isEmpty(text){
    return text.length < 1;
}

export function validOTP(otp){
    if (otp.length >3){
        return false;
    } else {
        return true;
    }
}

export function emailEncraptionFormat(email){
    var f_name   = email.substring(0,1,email.lastIndexOf("@"));
    var l_name   = email.substring(1,email.lastIndexOf("@"));
    var l_index = l_name.substring(l_name.length-1)
    var domain = email.substring(email.lastIndexOf("@")+1);
    let returnVal = f_name+"*****"+l_index+"@"+domain
    console.log("emailEncraptionFormat-------",l_index)
    return returnVal
    
}