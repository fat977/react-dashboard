import React from "react";
import { Col } from "react-bootstrap";

const ButtonDiv = ({ children }) => {
  return (
    <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
      <div className=" bg-white rounded py-3 px-4 button-div">{children}</div>
    </Col>
  );
};

export default ButtonDiv;
