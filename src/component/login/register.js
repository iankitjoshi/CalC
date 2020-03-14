import React from "react";
import "../../assets/login.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import ValidationRegister from "./valid";
import InputField from "./inputField";


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email:"",
      error:{}
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({ formData });
    console.log("formData", formData);

    localStorage.setItem("token", JSON.stringify(formData))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SignUp Sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {  
      window.location.href = "/login"  
      }, 1700);

    this.setState({
      email: "",
      password: ""
    });
  };


  handleChange = e => {
    const { name, value } = e.target;
    const { error } = this.state;

    let reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (name == "email" && reg.test(value)) {
      return;
    }
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
                <Link to="/login" style={{color:"white"}}>  <p>Sign in..!!</p></Link>
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
