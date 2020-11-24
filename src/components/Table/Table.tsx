import React, { HTMLAttributes, ReactNodeArray } from "react";
import Tbody from "./Tbody";
import { IData } from "../../shared/_type";
import sass from "./table.module.scss";

export interface ITable extends HTMLAttributes<HTMLTableElement> {
  header?: JSX.Element | ReactNodeArray;
  data: IData[];
  hiddenColumns?: boolean[];
}
const Table: React.FC<ITable> = ({
  header,
  data,
  hiddenColumns,
  className,
  ...props
}) => {
  // hide columns with css for better performance
  let classes = "";
  hiddenColumns?.forEach((val, i) => {
    if (val) classes += " " + sass["hide_c" + (i + 1)];
  });

  return (
    <div>
      <table className={`${sass.table} ${classes} ${className}`} {...props}>
        {header}
        <Tbody data={data} />
      </table>
    </div>
  );
};

export default Table;
