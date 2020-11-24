import React from "react";

export interface IData {
  [key: string]: any;
}
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
      {Features.map((key) => {
        let diff = false;
        let temp = data[0][key];
        const val = data.map((d, i) => {
          diff = diff || temp !== d[key];
          temp = typeof d[key] === "string" ? d[key] : "";
          return <td key={i}>{temp}</td>;
        });
        return (
          <tr key={key} className={diff ? "diff" : ""}>
            <td>{key}</td>
            {val}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
