import React from "react";
import { Container, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import LoginForm from "../../components/forms/Login";
import { FormExtraLinks } from "../../components/forms/styles";
import { FullHeightCenterRow } from "../../components/commons/styles";

/*
  Container, Col are from the bootstrap package for react.
  useHistory is the hook for interacting with the navigation.
  FormExtraLinks and FullHeightCenterRow are common components for rendering the links style and the
  height center row for centering a container/block in the middle of the screen.
  ArrowReturnLeft is a component based on the bootstrap icons.
  LoginForm is a common form for making the sign in.
*/

function LoginPage() {
  const history = useHistory();

  const onSignIn = () => history.push("/profile");

  return (
    <Container>
      <FullHeightCenterRow>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <ArrowReturnLeft
            size={21}
            color="#000"
            className="mb-4"
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
          <h1 className="mb-4">Log In</h1>
          <LoginForm onSubmit={onSignIn} />
          <FormExtraLinks onClick={() => history.push("/register")}>
            Sign up
          </FormExtraLinks>
        </Col>
      </FullHeightCenterRow>
    </Container>
  )
}

export default LoginPage;
