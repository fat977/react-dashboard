import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import  Container  from "react-bootstrap/Container";
import PageWrapper from "../../components/PageWrapper";

export default function Editors() {

  return (
    <PageWrapper title="Editor">
      <div className="p-lg-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>Editor</h3>
          </div>
          <div style={{ marginBottom: "81px", height: "300px" }}>
            <h4>CKEditor in React</h4>
            <CKEditor
              editor={ClassicEditor}
              config={{
                licenseKey:'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzYwMzUxOTksImp0aSI6IjRlYzA4YjQyLTRhMTMtNGQwMy04OTc1LTkxMmM2OWNkM2M5NSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjhlODIxYTZmIn0.BsHuidAa7Tib5w15OT_P2ImcBuh0CM9GGfeW_l6hhPxtRQqHry-xgnl4wiRIdMknozUwO-GdT7kjFHnwex9U_A',
                toolbar: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "|",
                  "blockQuote",
                  "undo",
                  "redo",
                ],
              }}
              data="<p>Write something here...</p>"
              onReady={(editor) => {
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "300px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
            />
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
