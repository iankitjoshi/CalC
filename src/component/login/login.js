import React from "react";
import "../../assets/login.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ValidationRegister from "./valid";
import InputField from "./inputField";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    // console.log(window.localStorage.token,'token',window.localStorage , '<<Storage>>')
    // console.log(JSON.parse(window.localStorage.token).find(items => items.email == formData.email),'parse')
    let a = JSON.parse(window.localStorage.token).find(items => items.email == formData.email)
    let b = JSON.parse(window.localStorage.token).find(items => items.password == formData.password)
    console.log(a,'a')
    console.log(b,'b')

    if (a) {
        if(b){
        window.location.href = "/home";
      }else{
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Please Enter Valid Email OR Password"
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Please Enter Valid Email OR Password"
      });
    }

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
                    ALREADY MEMBERS
                  </span>
                  <div className="login">
                    <form onSubmit={this.handleSubmit}>
                      <div class="form-group ">
                        <InputField
                          type="text"
                          title="Enter Valid Email ID"
                          className="form-class  form-control"
                          placeholder="Email"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          name="email"
                          error={error.email}
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
                        />
                      </div>

                      <button
                        type="submit"
                        className="sign-in-btn  btn btn-primary "
                        onClick={() => {
                          this.login();
                        }}
                      >
                        SIGN IN
                      </button>
                    </form>
                  </div>
                </div>

                <div className="create-account">
                  <p>Don't have account yet?</p>
                  <Link to="/register" style={{ color: "white" }}>
                    {" "}
                    <p>Create an Account</p>
                  </Link>
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Login;

//{error ? "has-error" :""}
