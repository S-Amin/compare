import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h1 style={{ textAlign: "center" }}>
      <div>Created by the React.js, Typescript</div>
      <Link to="/compare">Compare Page</Link>
      <br />
      <Link to="/home">Home</Link>
    </h1>
  );
};

export default Home;
