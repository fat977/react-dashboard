import { Card, Col } from "react-bootstrap";

export default function GeneralCard({title,children}) {
  return(
    <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
      <Card className="mt-3">
        <Card.Header className="bg-primary text-white py-3">
          {title}
        </Card.Header>
        <Card.Body>
          {children}
        </Card.Body>
      </Card>
    </Col>
  );
}
