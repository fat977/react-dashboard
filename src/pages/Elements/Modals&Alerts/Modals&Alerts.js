import { Card, Col, Container, Row } from '../../../components/bootstrapComponent';
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "../../../components/PageWrapper";
import ModalsContent from "./Modals";
import SweetAlertContent from "./SweetAlert";
import ToastContent from "./Toasts";
import ToastrContent from "./Toastr";

export default function Modals() {
  const contents = [
    { id: 1, name: " Modals", component: <ModalsContent /> },
    { id: 2, name: " Toasts", component: <ToastContent /> },
    { id: 3, name: " Sweet Alert", component: <SweetAlertContent /> },
    { id: 4, name: " Toastr", component: <ToastrContent /> },
  ];
  return (
    <PageWrapper title="Modals & Alerts">
      <div className="p-lg-4 position-relative">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>Modals & Alerts</h3>
          </div>
        
          {contents.map((content) => (
            <Row className="my-3" key={content.id}>
              <Col className="mt-lg-0 mt-sm-3">
                <Card className="mt-lg-3">
                  <Card.Header className="bg-dark text-white py-3">
                   {content.name}
                  </Card.Header>
                  <Card.Body>
                    
                    {content.component}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </PageWrapper>
  );
}
