import React from "react";
import { IData } from "../../shared/_type";
import { isDifferent } from "../../utils/compare";
import sass from "./table.module.scss";

export interface ITbody {
  data: IData[];
}
const Tbody: React.FC<ITbody> = ({ data }) => {
  if (data.length < 1)
    return (
      <tbody>
        <tr>
          <td>no data</td>
        </tr>
      </tbody>
    );

  const Features = Object.keys(data[0]).sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1
  );
  return (
    <tbody>
      {Features.map((key) => (
        <tr key={key} className={isDifferent(data, key) ? sass.diff : ""}>
          <td>{key}</td>
          {data.map((d, i) => (
            <td key={i}>{typeof d[key] === "string" ? d[key] : ""}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
