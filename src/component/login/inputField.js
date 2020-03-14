import React from "react";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "../../assets/login.scss";


const InputField = props => {
  let { error, required = true, label = "", type , id, placeholder} = props;

  return (
    <FormGroup
      className={error ? "error" : ""}
      // style={ContainerStyle}
    >
      {/* {label ? (
        <span>
          <label htmlFor={id}>
            {label}
            {required ? <em>*</em> : null}
          </label>
        </span>
      ) : null} */}
      {/* { type !== 'text' ? (
            <FormControl
            error={error}
            />

            <FormControl/>
        )} */}
        <FormControl
            type={type}
            placeholder={placeholder}
            required={required}
        ></FormControl>

      {error && <span className="errors">{error}</span>}
    </FormGroup>
  );
};

export default InputField;
