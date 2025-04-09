import React from "react";
import { Link } from "react-router-dom";

export const ElementLoginScreen = (): JSX.Element => {
  return (
    <div>
      <h1>Login Screen</h1>
      <Link to="/create-new">Go to Create New Organisation</Link>
    </div>
  );
};
