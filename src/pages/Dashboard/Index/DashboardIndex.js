import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { widgets } from "./Widgets";
import DashboardCalendar from "./Calendar";

import "../Dashboard.scss";
import PageWrapper from "../../../components/PageWrapper";
import Todo from "./Todo";
export default function DashboardIndex() {

  return (
    <PageWrapper title="Dashboard">
      <div className="p-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h3>Dashboard</h3>
          </div>
          <Row className="g-3 my-3">
            {widgets.map((widget, key) => (
              <Col xs={6} md={6} lg={3} key={key}>
                <div className="widget px-3 py-4 bg-white  rounded-2">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1>{widget.count}</h1>
                    <FontAwesomeIcon
                      size="2xl"
                      color={widget.iconColor}
                      icon={widget.icon}
                    />
                  </div>
                  <p
                    className={`border-bottom border-5 rounded border-${widget.class} w-75`}
                  >
                    {widget.name}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="g-3 my-3">
            <Col xs={12} md={6} lg={6}>
              <DashboardCalendar />
            </Col>
            <Col
              
              xs={12}
              md={6}
              lg={6}
            ><Todo /></Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
