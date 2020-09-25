import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/commons/Button";
import { Banner, FixedFooter } from "../../components/commons/styles";

const Logo = styled.span`
  color: #FFF;
`;

function Home() {
  const history = useHistory();

  return (
    <Banner>
      <h2>
        <Logo className="pr-2">{"<>"}</Logo>
        photo
      </h2>
      <div className="d-none d-sm-block">
        <Row className="mt-4">
          <Col>
            <Button secondary onClick={() => history.push("/login")}>
              Log in
            </Button>
          </Col>
          <Col>
            <Button onClick={() => history.push("/register")}>
              Register
            </Button>
          </Col>
        </Row>
      </div>      
      <FixedFooter className="d-block d-sm-none">
        <Row>
          <Col>
            <Button secondary block onClick={() => history.push("/login")}>
              Log in
            </Button>
          </Col>
          <Col>
            <Button block onClick={() => history.push("/register")}>
              Register
            </Button>
          </Col>
        </Row>
      </FixedFooter>
    </Banner>
  );
}

export default Home;
