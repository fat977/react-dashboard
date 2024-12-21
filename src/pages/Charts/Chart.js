import { Card, Col, Container, Row } from "react-bootstrap";
import LineChart from "./Types/LineChart";
import PieChart from "./Types/PieChart";
import "./Chart.scss";
import BarChart from "./Types/BarChart";
import DoughnutChart from "./Types/DoughnutChart";
import AreaChart from "./Types/AreaChart";
import PageWrapper from "../../components/PageWrapper";
export default function Chart() {
 
  return (
    <PageWrapper title="ChartJs">
      <div className="p-lg-4">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between my-3">
          <h3>ChartJs</h3>
        </div>
        <Row className="my-3">
          <Col xs={12} md={12} lg={6} className="mt-lg-0 mt-sm-3">
            <Card>
              <Card.Header className="bg-primary text-white py-3">Line Chart</Card.Header>
              <Card.Body>
                <LineChart />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={6} className="mt-lg-0 mt-sm-3">
            <Card>
              <Card.Header className="bg-primary text-white py-3">Area Chart</Card.Header>
              <Card.Body>
                <AreaChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={12} lg={6} className="mt-lg-0 mt-sm-3">
            <Card>
              <Card.Header className="bg-warning text-white py-3">Doughnut Chart</Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <DoughnutChart />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={6} className="mt-lg-0 mt-sm-3">
            <Card>
              <Card.Header className="bg-danger text-white py-3">Pie Chart</Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <PieChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={12} lg={6} className="mt-lg-0 mt-sm-3">
            <Card>
              <Card.Header className="bg-success text-white py-3">Bar Chart</Card.Header>
              <Card.Body>
                <BarChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </PageWrapper>
  );
}
