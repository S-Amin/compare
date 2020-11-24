import { IData } from "../shared/_type";

export const isDifferent = (data: IData[], keyToCompare: string) => {
  let temp = data[0][keyToCompare];
  for (let i = 0; i < data.length; i++) {
    if (temp !== data[i][keyToCompare]) return true;
    temp = data[i][keyToCompare];
  }
  return false;
};
