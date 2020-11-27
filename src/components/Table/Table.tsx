import React, { HTMLAttributes, ReactNodeArray, ReactElement } from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";
import sass from "./table.module.scss";

export interface ITable extends HTMLAttributes<HTMLTableElement> {
  header?: JSX.Element | ReactNodeArray;
  hiddenColumns?: boolean[];
}
const Table: React.FC<ITable> = ({
  header,
  hiddenColumns,
  className,
  children,
  ...props
}) => {
  // hide columns with css for better performance
  let classes = "";
  hiddenColumns?.forEach((val, i) => {
    if (val) classes += " " + sass["hide_c" + (i + 1)];
  });

  const HEAD: ReactElement[] = [];
  const BODY: ReactElement[] = [];

  React.Children.map(children, (c) => {
    const child = c as ReactElement;
    if (child.type === Thead) HEAD.push(child);
    if (child.type === Tbody) BODY.push(child);
  });

  return (
    <div>
      <table className={`${sass.table} ${classes} ${className}`} {...props}>
        {HEAD}
        {BODY}
      </table>
    </div>
  );
};

export default Table;
