import React from "react";
import { connect } from "react-redux";

import "./Education.css";
import { EducationItem } from "../reducers/dataReducer";
import { State } from "../reducers";
import ContentList from "./list/ContentList";

interface props {
  data: Array<EducationItem>;
}

const Education: React.FC<props> = ({ data }: props) => {
  const dataToList = data.map(
    ({ university, faculty, degree, graduated, description, thesis }) => {
      return {
        header: university,
        subheader: faculty,
        subtitle: degree,
        dates: graduated,
        description,
        subdescription: thesis,
      };
    }
  );

  return (
    <div className="resume-container" id="education">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="resume-list-header">Education</span>
          </div>
          <div className="col-md-8">
            <ContentList data={dataToList}  />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.education,
  };
};

export default connect(mapStateToProps)(Education);
