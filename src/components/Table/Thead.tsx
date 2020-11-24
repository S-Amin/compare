import React, { HTMLAttributes, ReactNode, ReactNodeArray } from "react";

export interface IThead extends HTMLAttributes<HTMLTableHeaderCellElement> {
  children: ReactNodeArray | ReactNode;
}
const Thead: React.FC<IThead> = ({ children, ...props }) => {
  return (
    <thead>
      <tr>
        {React.Children.map(children, (child) => (
          <th {...props}>{child}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
