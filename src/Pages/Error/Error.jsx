import React from "react";
import { Link, useParams } from "react-router-dom";

const Error = () => {
  const param = useParams();
  return (
    <div>
      Error Page Not Found 404. <Link to="/applied-jobs-dashboard">Return</Link>
    </div>
  );
};

export default Error;
