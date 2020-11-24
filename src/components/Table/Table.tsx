import React, { ReactNodeArray } from "react";
import Tbody, { IData } from "./Tbody";
import sass from "./table.module.scss";

export interface ITable {
  header?: JSX.Element | ReactNodeArray;
  data: IData[];
  hiddenColumns?: boolean[];
}
const Table: React.FC<ITable> = ({ header, data, hiddenColumns }) => {
  // hide columns with css for better performance
  let classes = "";
  hiddenColumns?.forEach((val, i) => {
    if (val) classes += " " + sass["hide_c" + (i + 1)];
  });

  return (
    <div>
      <table className={classes}>
        {header}
        <Tbody data={data} />
      </table>
    </div>
  );
};

export default Table;