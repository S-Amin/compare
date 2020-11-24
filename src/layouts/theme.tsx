import React, { ReactNode, ReactNodeArray } from "react";
import { Link } from "react-router-dom";
import "./global.scss";

interface ITheme {
  children: ReactNodeArray | ReactNode;
}
const Theme: React.FC<ITheme> = ({ children }) => {
  return (
    <>
      <header className="header">
        <h3>Compare table components</h3>
        <div>
          <Link to="/compare">Compare Page</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
      <div className="container">{children}</div>
    </>
  );
};

export default Theme;
