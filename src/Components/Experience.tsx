import React from "react";
import { connect } from "react-redux";

import "./Experience.css";
import { ExperienceItem } from "../reducers/dataReducer";
import { State } from "../reducers";
import ContentList from "./list/ContentList";

interface props {
  data: Array<ExperienceItem>;
}

const Experience: React.FC<props> = ({ data }: props) => {
  const renderOrganizations = () => {
    return data.map((item) => {
      const listData = item.roles.map((item) => {
        return {
          header: item.roletitle,
          subheader: item.dates,
          description: item.description,
          link: item.link,
        };
      });

      return (
        <div key={item.organization + Math.random() * 100}>
          <h2 style={{ margin: "0" }}>{item.organization}</h2>
          <p style={{ margin: "0", color: "gray", fontStyle: "italic" }}>
            {item.totaltime}
          </p>
          <div style={{ marginLeft: "10px" }}>
            <ContentList data={listData} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="resume-container" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="resume-list-header">Experience</span>
          </div>
          <div className="col-md-8">{renderOrganizations()}</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.experience,
  };
};

export default connect(mapStateToProps)(Experience);
