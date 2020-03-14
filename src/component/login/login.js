import React from "react";
import "../../assets/login.scss";
import { Row, Col } from "react-bootstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email
    };

    this.setState({ formData });
    console.log("formData", formData);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("onChange", e.target.value);
  };

  render() {
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
                        <input
                          type="text"
                          className="form-class  form-control"
                          placeholder="NAME"
                          id="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          name="name"
                        />
                      </div>
                      <div class="form-group ">
                        <input
                          type="text"
                          className="form-class  form-control"
                          placeholder="EMAIL"
                          value={this.state.email}
                          onChange={this.handleChange}
                          name="email"
                          id="email"
                        />
                      </div>
                      <button
                        type="submit"
                        className="sign-in-btn  btn btn-primary "
                      >
                        SIGN IN
                      </button>
                    </form>
                  </div>
                </div>

                <div className="create-account">
                  <p>Don't have account yet?</p>
                  <p>Create an Account</p>
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
