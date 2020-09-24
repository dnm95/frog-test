import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import styled from "styled-components";
import Button from "../../components/commons/Button";

const Logout = styled.span`
  color: #FF4D00;
  font-size: 16px;
  cursor: pointer;
`;

function AccountPage() {
  const history = useHistory();

  return (
    <Container className="mt-5">
      <Logout
        className="float-right"
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
  )
}

export default AccountPage;
