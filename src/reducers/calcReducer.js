import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import React from 'react'
// import {Toast} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'




const calcReducers = (state = "" , action) => {
    
    switch(action.type){
        case 'ADD' : {
            return state + action.payload
        }
        case 'EVEL' : {
            console.log(state && state.length && state[state.length-1],'length')
            if(parseInt(state && state.length && state[state.length-1])){
                return eval(state)
            } else {
                // alert('Invalid Input')
                // toast.success('No', {
                //     position: toast.POSITION.TOP_CENTER
                // }); 
                // <Toast>
                //     <Toast.Header>
                //         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                //         <strong className="mr-auto">Bootstrap</strong>
                //         <small>11 mins ago</small>
                //     </Toast.Header>
                //     <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                // </Toast>
               
            }
        }
        case 'RESET' : {
            return state = ''
        }
        default : {
            return state
        }
    }
    
}

export default calcReducers