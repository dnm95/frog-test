import React from "react";
import { Container, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import LoginForm from "../../components/forms/Login";
import { FormExtraLinks } from "../../components/forms/styles";
import { FullHeightCenterRow } from "../../components/commons/styles";

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
