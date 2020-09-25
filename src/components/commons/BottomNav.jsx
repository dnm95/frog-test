import React from "react";
import { Row, Col } from "reactstrap";
import {
  HouseDoor, Search, PlusCircle,
  Chat, Person,
} from "react-bootstrap-icons";

/*
  Component for rendering the bottom nav once the user is authenticated,
*/

const BottomNav = () => (
  <Row>
    <Col className="text-center">
      <HouseDoor
        size={20}
        color="#000"
        style={{ margin: "0 auto" }}
      />
    </Col>
    <Col className="text-center">
      <Search
        size={20}
        color="#000"
        style={{ margin: "0 auto" }}
      />
    </Col>
    <Col className="text-center">
      <PlusCircle
        size={20}
        color="#FF00D6"
        style={{ margin: "0 auto" }}
      />
    </Col>
    <Col className="text-center">
      <Chat
        size={20}
        color="#000"
        style={{ margin: "0 auto" }}
      />
    </Col>
    <Col className="text-center">
      <Person
        size={21}
        color="#000"
        style={{ margin: "0 auto" }}
      />
    </Col>
  </Row>
);

export default BottomNav;
