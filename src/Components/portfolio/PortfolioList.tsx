import React from "react";

import { WorksItem } from "../../reducers/dataReducer";
import PortfolioItem from "./PortfolioItem";

interface Props {
  data: Array<WorksItem>;
}

const PortfolioList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="col-lg-3" key={item.title}>
          <PortfolioItem data={item} />
        </div>
      ))}
    </>
  );
};

export default PortfolioList;
