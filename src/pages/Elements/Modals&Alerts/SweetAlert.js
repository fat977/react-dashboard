import Button  from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function SweetAlertContent(){
    const MySwal = withReactContent(Swal);

    const showAlert = () => {
        MySwal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      };
    return(
        <div className="d-flex gap-3">
        <Button onClick={showAlert}>Show SweetAlert</Button>
                  <a
                    href="https://sweetalert2.github.io/#examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    for more example
                  </a>
        </div>
    )
}