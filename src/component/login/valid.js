import Validator from 'is_js'
import { isEmpty } from 'lodash'

function ValidationRegister(data) {
    let error = {}



    console.log("Error", data)

    if(Validator.empty(data.email)) {
        error.email = "Email id is Required !!"
    }


    if(Validator.empty(data.password)) {
        error.password = "Password is Required !!"
    }


    return {
        isValid: isEmpty(error),
        error
    }
}

export default ValidationRegister;