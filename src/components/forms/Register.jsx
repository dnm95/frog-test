import React, { useState } from "react";
import { func } from "prop-types";
import { Form, FormGroup } from "reactstrap";
import { Input } from "./styles";
import Button from "../commons/Button";

/*
  Component that renders the basic sign up form, it validates that the inputs
  are not empty, it uses react hooks "useState" for maintinig the data on user
  interaction, once the form is ready in executes the onSubmit function that comes
  from the props component.
*/

const initialState = {
  email: "",
  password: "",
}

function RegisterForm(props) {
  const { onSubmit } = props;
  const [data, setData] = useState(initialState);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onBeforSubmit = (e) => {
    e.preventDefault();
    return onSubmit(data);
  }

  return (
    <Form onSubmit={onBeforSubmit}>
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={onChange}
          placeholder="Email"
          autoComplete="off"
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
      </FormGroup>

      <Button type="submit" block>
        Sign up
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  onSubmit: func.isRequired,
};

export default RegisterForm;