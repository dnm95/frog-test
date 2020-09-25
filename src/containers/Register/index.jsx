import React from "react";
import { Container, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import RegisterForm from "../../components/forms/Register";
import { FormExtraLinks } from "../../components/forms/styles";
import { FullHeightCenterRow } from "../../components/commons/styles";

/*
  Container, Col are from the bootstrap package for react.
  useHistory is the hook for interacting with the navigation.
  Button is a common component for rendering the basic two buttons that appears in the figma mockup.
  FormExtraLinks and FullHeightCenterRow are common components for rendering the links style and the
  height center row for centering a container/block in the middle of the screen.
  ArrowReturnLeft is a component based on the bootstrap icons.
  RegisterForm is a common form for making the sign up.
*/

function RegisterPage() {
  const history = useHistory();

  const onRegister = () => history.push("/profile");

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
          <h1 className="mb-4">Register</h1>
          <RegisterForm onSubmit={onRegister} />
          <FormExtraLinks onClick={() => history.push("/login")}>
            Sign in
          </FormExtraLinks>
        </Col>
      </FullHeightCenterRow>
    </Container>
  )
}

export default RegisterPage;
