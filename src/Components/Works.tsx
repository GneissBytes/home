import React from "react";
import { connect } from "react-redux";

import "./Works.css";
import PortfolioList from "./portfolio/PortfolioList";
import { State } from "../reducers";
import { WorksItem } from "../reducers/dataReducer";

interface Props {
  data: Array<WorksItem>;
}

const Works: React.FC<Props> = ({ data }) => {
  return (
    <div className="resume-container" id="works">
      <div className="container">
        <div className="row works-header">
          <div className="col-md-4">
            <span className="resume-list-header works-header">Works</span>
          </div>
        </div>
        <div className="row">
          <PortfolioList data={data} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.works,
  };
};

export default connect(mapStateToProps)(Works);
