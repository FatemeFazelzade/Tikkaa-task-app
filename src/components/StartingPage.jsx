import React from "react";
import "../styles/StartingPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StartingPage() {
  return (
    <>
      <h4>
        چقدر با هدفت فاصله داری؟ <br /> با انجام این تست یک قدم به هدفت نزدیکتر
        شو!
      </h4>
      <h3>زبان مورد نظرت چیه؟</h3>
      <Container fluid>
        <Row>
          <Col>
            <p>انگلیسی</p>
            <img
              src="../styles/assets/united-kingdom.png"
              alt="English Language"
            />
          </Col>
          <Col>
            <img src="../styles/assets/germany.png" alt="German Language" />
            <p>المانی</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
          <Col>
            <p></p>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StartingPage;
