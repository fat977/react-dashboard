import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import  Container  from "react-bootstrap/Container";
import PageWrapper from "../../components/PageWrapper";
export default function Editors() {

  return (
    <PageWrapper title="Editor">
      <div className="p-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h3>Editor</h3>
          </div>
          <div style={{ marginBottom: "81px", height: "300px" }}>
            <h4>CKEditor in React</h4>
            <CKEditor
              editor={ClassicEditor}
              config={{
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
