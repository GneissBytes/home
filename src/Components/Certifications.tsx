import React from "react";
import { connect } from "react-redux";

import "./Certifications.css";
import { CertificationItem } from "../reducers/dataReducer";
import { State } from "../reducers";
import ContentList from "./list/ContentList";

interface props {
  data: Array<CertificationItem>;
}

const Certifications: React.FC<props> = ({ data }: props) => {
  const dataToList = data.map(
    ({ title, issuer, dates, credentialId, credentialsLink }) => {
      return {
        header: title,
        subtitle: issuer,
        dates,
        subdescription: credentialId ? `Credential ID ${credentialId}` : "",
        link: credentialsLink
          ? { text: "See credentials", href: credentialsLink }
          : undefined,
      };
    }
  );

  return (
    <div className="resume-container" id="certifications">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="resume-list-header">Certifications</span>
          </div>
          <div className="col-md-8">
            <ContentList data={dataToList} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.certifications,
  };
};

export default connect(mapStateToProps)(Certifications);
