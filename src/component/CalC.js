import React from 'react'
import {increment, reset, action ,plus, evel} from '../action/calc'
import { connect } from 'react-redux'

function CalC(props){
    console.log(props.calc,'cal')
    return(
        <div style={{textAlign:'center'}}>
            <h3>{props.calc}</h3>
                
                <button  type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('9'))}}>9</button>
                <button  type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('8'))}}>8</button>
                <button  type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('7'))}}>7</button> 
                <button  type="button" class="btn btn-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('+'))}}>+</button> <br/>

                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('6'))}}>6</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('5'))}}>5</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('4'))}}>4</button>
                <button type="button" class="btn btn-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('-'))}}>-</button> <br />

                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('3'))}}>3</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('2'))}}>2</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('1'))}}>1</button>
                <button type="button" class="btn btn-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('/'))}}>/</button> <br />

                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('.'))}}>.</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('0'))}}>0</button>
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(reset(0))}}>C</button> 
                <button type="button" class="btn btn-dark" style={{borderRadius:"0",width:'50px'}} onClick={() => {props.dispatch(increment('*'))}}>*</button><br /><br />
                
                
                <button type="button" class="btn btn-outline-dark" style={{borderRadius:"0",width:'90px'}} onClick={() => {props.dispatch(evel())}}>=</button> <br />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        calc : state.calc
    }
}

export default connect(mapStateToProps)(CalC)


