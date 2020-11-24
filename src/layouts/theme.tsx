import React, { ReactNode, ReactNodeArray } from "react";
import "./global.scss";

interface ITheme {
  children: ReactNodeArray | ReactNode;
}
const Theme: React.FC<ITheme> = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>Compare table components</h1>
      </header>
      <div className="container">{children}</div>
    </>
  );
};

export default Theme;
