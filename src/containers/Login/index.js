import React from "react";
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/forms/Login";

function LoginPage() {
  const history = useHistory();

  const onSignIn = () => history.push("/profile");

  return (
    <Container>
      <h1>Log In</h1>
      <LoginForm onSubmit={onSignIn} />
    </Container>
  )
}

export default LoginPage;
