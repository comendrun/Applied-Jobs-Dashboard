import React from "react";
import { Link, useParams } from "react-router-dom";
import AnimatedContainer from "../../container/AnimatedContainer";

const Error = () => {
  const param = useParams();
  return (
    <AnimatedContainer>
      Error Page Not Found 404. <Link to="/applied-jobs-dashboard">Return</Link>
    </AnimatedContainer>
  );
};

export default Error;
