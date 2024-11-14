"use client";

import { Button, Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

const Assignment10 = () => {
  const mystyle={
    maxWidth: "100%"
  }
  return (
    <div className="mt-3 container ">

       <Tab.Container id="left-tabs-example" defaultActiveKey="one">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="one">Danh mục tin tức</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="two">Chi tiết tin tức</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">Danh mục tour</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">Chi tiết tour</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five">Đăng ký đăng nhập</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="six">Mục yêu thích</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <img style={mystyle} src="./images/assignment10/blog.png" alt="" />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <img style={mystyle} src="./images/assignment10/blogDetail.png" alt="" />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <img style={mystyle} src="./images/assignment10/tour.png" alt="" />
            </Tab.Pane>
            <Tab.Pane eventKey="four">
              <img style={mystyle} src="./images/assignment10/blogDetail.png" alt="" />
            </Tab.Pane>
            <Tab.Pane eventKey="five">
              <div className="d-flex">
                <img style={mystyle} src="./images/assignment10/login.png" alt="" />
                <img style={mystyle} src="./images/assignment10/register.png" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="six">
              <img style={mystyle} src="./images/assignment10/favorites.png" alt="" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
};

export default Assignment10;
