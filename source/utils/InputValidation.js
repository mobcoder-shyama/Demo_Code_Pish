export function validEmail(emailText){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(emailText) === false)
    {
        return true;
    }
    else {
      return false;
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