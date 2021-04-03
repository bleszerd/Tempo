import React from 'react'

function validateKey(responseData: any, errorDispatch: React.Dispatch<any>, message: String){
    if(responseData.data.valid_key === false){
        errorDispatch(message)
        return false
    }

    return true
}

export {
    validateKey
}