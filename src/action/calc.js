export const increment = (add) => {
    return {type : 'ADD' , payload : add}
}

export const reset = () => {
    return {type : 'RESET',}
}

export const evel = (v) => {
    return {type : 'EVEL' , payload : v}
}

export const plus = () => {
    return {type : 'PLUS'}
}