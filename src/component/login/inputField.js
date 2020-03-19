import React from "react";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "../../assets/login.scss";


const InputField = props => {
  let { error, required = true, label , type , id, placeholder,onChange,value,name} = props;

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
            onChange={onChange}
            value={value}
            name={name}
        ></FormControl>

      {error && <span className="errors">{error}</span>}
    </FormGroup>
  );
};

export default InputField;
