import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h1 style={{ textAlign: "center" }}>
      <div>Created by the React.js, Typescript</div>
      <br />
      <Link to="/compare">Compare Product Page</Link>
    </h1>
  );
};

export default Home;
