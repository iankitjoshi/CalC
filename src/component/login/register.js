import React from "react";
import "../../assets/login.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import ValidationRegister from "./valid";
import InputField from "./inputField";


class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password:"",
      error:{}
    };
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({ formData });
    console.log("formData", formData);

    let array = []
    let arr = JSON.parse(localStorage.getItem("token")) 
    console.log(arr,">>arr");
    
    if(arr){                                                                                                                                                                          
      array = [...arr]
    }else{
      array=[]
    }
    
     var a = arr && arr.find(item => item.email == formData.email) || []

    if(a.length){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'This Email Already Registered',
        text: 'Please Signup with another Email'
      }) 
    } else {
      array.push(formData)
      localStorage.setItem("token",JSON.stringify(array))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SignUp Sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {  
        this.props.history.push('/')
      }, 1700);
    }

  //  array.push(formData)
  //  localStorage.setItem("token",JSON.stringify(array))


    this.setState({
      email: "",
      password: ""
    });
  };


  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value,'value')
    const { error } = this.state;
    console.log(error,'error')

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (name === "email" && reg.test(value)) {
      return;
    }else
    this.setState({ [name]: value, error: { ...error, [name]: "" } });
    console.log("onChange", e.target.value);
  };

  isValid = () => {
    const { email, password } = this.state;
    const { isValid, error } = ValidationRegister({ email, password });
    this.setState({ error });
    return isValid;
  };

  login = () => {
    let isValid = this.isValid();
    const { email, password } = this.state;
    console.log(isValid,'isValid')
    console.log(email, password ,'email')

    if(isValid){

    }
  };



  render() {
    const { error } = this.state;
    return (
      <Row className="login-main-div">
        <Col xs={7} sm={7} md={7} className="container-sm logn-sec-div">
          <Row className="rotate-row">
            <Col xs={6} sm={6} md={6}>
              <div className="rotate-div"></div>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <Col xs={12} sm={12} md={12} className="login-div">
                <div className="log-part">
                  <span className="badge-login  badge badge-light">
                    SIGN UP HERE !!
                  </span>
                  <div className="login">
                    <form onSubmit={this.handleSubmit}>
                      <div class="form-group ">
                        <InputField
                          type="text"
                          title="Enter Valid Email ID"
                          className="form-class  form-control"
                          placeholder={"Email"}
                          id="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          name="email"
                          error={error.email}
                          required={true}
                        />
                        
                      </div>
                      <div class="form-group ">
                        <InputField
                          type="password"
                          className="form-class  form-control"
                          value={this.state.password}
                          placeholder={"Password"}
                          onChange={this.handleChange}
                          name="password"
                          id="password"
                          error={error.password}
                          required={true}
                        />
                      </div>
                      <button
                        type="submit"
                        className="sign-in-btn  btn btn-primary "
                        onClick={() => {
                          this.login();
                        }}
                      >
                        SIGN UP
                      </button>
                    </form>
                  </div>
                </div>

                <div className="create-account">
                <p>Already have Account ?</p> 
                <Link to="/" style={{color:"white"}}>  <p>Sign in..!!</p></Link>
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Register;
