import { useRef, useState } from "react";
import { Button, ButtonGroup, Container, Row } from "../../components/bootstrapComponent";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import PageWrapper from "../../components/PageWrapper";

export default function DataTables() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 3, name: "Sam Green", email: "sam@example.com", age: 23 },
    { id: 4, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 5, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 6, name: "Sam Green", email: "sam@example.com", age: 23 },
    { id: 7, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 8, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 9, name: "Sam Green", email: "sam@example.com", age: 23 },
    { id: 10, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 11, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 12, name: "Sam Green", email: "sam@example.com", age: 23 },
    { id: 13, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 14, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 15, name: "Sam Green", email: "sam@example.com", age: 23 },
  ];

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email },
    { name: "Age", selector: (row) => row.age, sortable: true },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f4f4f4",
        fontWeight: "bold",
      },
    },
  };

  const [filterText, setFilterText] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("User Data", 20, 10);
    doc.autoTable({
      head: [["ID", "Name", "Email", "Age"]],
      body: data.map((row) => [row.id, row.name, row.email, row.age]),
    });
    doc.save("user_data.pdf");
  };

  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const exportToExcel = () => {
    // Create a worksheet from the data
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

    // Write the workbook to an Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the file using file-saver
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "user_data.xlsx");
  };

  return (
    <PageWrapper title="DataTable">
      <div className="p-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h3>DataTables</h3>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between my-3">
            <input
              type="text"
              placeholder="Search by Name"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-sm-100"
            />

            <ButtonGroup className=" mt-lg-0 mt-3" aria-label="Basic example">
              <CSVLink
                data={data}
                filename="user_data.csv"
                className="btn btn-secondary"
              >
                CSV
              </CSVLink>
              <Button variant="secondary" onClick={exportPDF}>
                PDF
              </Button>
              <Button variant="secondary" onClick={handlePrint}>
                Print
              </Button>
              <Button variant="secondary" onClick={exportToExcel}>
                Excel
              </Button>
            </ButtonGroup>
          </div>

          <Row className="gap-3 my-3">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationRowsPerPageOptions={[5, 10, 20]}
              selectableRows
              customStyles={customStyles}
            />
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
