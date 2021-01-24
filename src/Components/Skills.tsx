import React from "react";
import { connect } from "react-redux";

import SkillBar from "./elements/SkillBar";

import { State } from "../reducers";
import { SkillsItem } from "../reducers/dataReducer";

import "./Skills.css";

interface Props {
  data: Array<SkillsItem>;
}

const Skills: React.FC<Props> = ({ data }) => {
  return (
    <div className="resume-container skills-container" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="resume-list-header">Skills</span>
          </div>
          <div className="col-md-8 skills-list">
            {data.map((item) => (
              <SkillBar data={item} key={item.title} />
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({ data: state.data.skills });

export default connect(mapStateToProps)(Skills);
