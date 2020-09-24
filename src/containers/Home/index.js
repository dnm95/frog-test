import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import Button from "../../components/commons/Button";
import { Banner, FixedFooter } from "../../components/commons/styles";

function Home() {
  const history = useHistory();

  return (
    <Banner>
      <h2>photo</h2>
      <Row className="mt-4">
        <Col>
          <Button secondary onClick={() => history.push("/login")}>
            Log in
          </Button>
        </Col>
        <Col>
          <Button>
            Register
          </Button>
        </Col>
      </Row>
      <FixedFooter>
        <Row className="mt-4">
          <Col>
            <Button secondary block onClick={() => history.push("/login")}>
              Log in
            </Button>
          </Col>
          <Col>
            <Button block>
              Register
            </Button>
          </Col>
        </Row>
      </FixedFooter>
    </Banner>
  );
}

export default Home;
