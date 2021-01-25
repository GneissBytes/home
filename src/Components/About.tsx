import React from "react";
import { connect } from "react-redux";
import { Download } from "react-bootstrap-icons";

import "./About.css";
import { State } from "../reducers";
import { About as AboutType } from "../reducers/dataReducer";

interface AboutProps {
  data: AboutType;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="about-container" id="about">
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <img
              src={data.profile_pic}
              className="profile-pic"
              alt="It's me!"
            />
          </div>
          <div className="col-md-9">
            <div>
              <h3 className="text-white">About me</h3>
              <p style={{ color: "#C6C69D" }}>{data.bio}</p>
            </div>
            <div className="row details-row">
              <div className="col-sm">
                <h3 className="text-white">Contact details</h3>
                <p style={{ color: "#C6C69D" }}>
                  <span>{data.name}</span>
                  <br />
                  {data.street ? (
                    <>
                      <span>{data.street}</span>
                      <br />
                    </>
                  ) : (
                    ""
                  )}
                  {data.city || data.state || data.postal_code ? (
                    <>
                      <span>
                        {data.city ? data.city : ""}
                        {data.state ? `, ${data.state}: ""` : ""}
                        {data.postal_code ? `, ${data.postal_code}` : ""}
                      </span>
                      <br />
                    </>
                  ) : (
                    ""
                  )}
                  {data.phone? <><span>{data.phone}</span>
                  <br /></>: ""}
                  <span>{data.email}</span>
                </p>
              </div>
              <div className="col-md resume-button-container ">
                <p>
                  <a className="resume-button" href={data.resume_link}>
                    <Download />
                    <span style={{ marginLeft: "5px" }}>
                      Download my Resume
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = (state: State) => {
  return {
    data: state.data.about,
  };
};

export default connect(MapStateToProps)(About);
