import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import styled from "styled-components";
import Button from "../../components/commons/Button";
import BottomNav from "../../components/commons/BottomNav";
import { FixedFooter } from "../../components/commons/styles";

/*
  Container, Col are from the bootstrap package for react.
  useHistory is the hook for interacting with the navigation.
  Button is a common component for rendering the basic two buttons that appears in the figma mockup.
  FormExtraLinks and FullHeightCenterRow are common components for rendering the links style and the
  height center row for centering a container/block in the middle of the screen.
  ArrowReturnLeft is a component based on the bootstrap icons.
  RegisterForm is a common form for making the sign up.
*/

const Logout = styled.span`
  color: #FF4D00;
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

function AccountPage() {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container className="mt-5">
        <Logout
          onClick={() => history.push("/")}
        >
          Salir
        </Logout>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
            <PersonCircle
              size={55}
              color="#C4C4C4"
              className="mb-4 mt-5"
              onClick={() => history.push("/")}
              style={{ margin: "0 auto" }}
            />
            <h2>Daniel Nava</h2>
            <p className="mb-4">Mexico City, MX</p>
            <Button block>
              Follow Daniel
            </Button>
            <Button block secondary className="mt-3">
              Message
            </Button>
          </Col>
        </Row>
      </Container>
      <FixedFooter className="d-block d-sm-none" withBorder>
        <BottomNav />
      </FixedFooter>
    </React.Fragment>
  )
}

export default AccountPage;
