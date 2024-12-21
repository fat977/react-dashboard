import { Col, Container, Row, Table } from "../../components/bootstrapComponent";
import TableComponent from "../../components/TableComponent";
import PageWrapper from "../../components/PageWrapper";
export default function BasicTable() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "age", label: "Age" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 3, name: "Sam Green", email: "sam@example.com", age: 23 },
  ];
  return (
    <PageWrapper title="Basic Table">
      <div className="p-lg-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>Basic Tables</h3>
          </div>
          <Row className="gap-3 my-3">
            <Col className="border p-3 shadow bg-white">
              <h4>Simple Table</h4>
              <TableComponent columns={columns} data={data} type="border" />
            </Col>
            <Col className="border p-3 shadow bg-white">
              <h4>Unbordered Table</h4>
              <TableComponent columns={columns} data={data} type="" />
            </Col>
          </Row>
          <Row className="gap-3 my-3">
            <Col className="border p-3 shadow bg-white">
              <h4>Striped Column Table</h4>
              <TableComponent
                columns={columns}
                data={data}
                type="table-striped-columns"
              />
            </Col>
            <Col className="border p-3 shadow bg-white">
              <h4>Dark Table</h4>
              <TableComponent
                columns={columns}
                data={data}
                type="table-striped table-dark"
              />
            </Col>
          </Row>
          <Row className="gap-3 my-3">
            <Col className="border p-3 shadow bg-white">
              <h4>Responsive Table</h4>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
