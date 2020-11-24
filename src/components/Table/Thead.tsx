import React, { ReactNode, ReactNodeArray } from "react";

export interface IThead {
  children: ReactNodeArray | ReactNode;
}
const Thead: React.FC<IThead> = ({ children }) => {
  return (
    <thead>
      <tr>
        {React.Children.map(children, (child) => (
          <th>{child}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
