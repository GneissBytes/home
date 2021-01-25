import React from "react";
import { connect } from "react-redux";

import "./Footer.css";
import { State } from "../reducers/index";
import { Home } from "../reducers/dataReducer";
import SocialLink from "./elements/SocialLink";

interface Props {
  data: Home["social_links"];
}

const Footer: React.FC<Props> = ({ data }) => {
  const renderLinks = () => {
    if (data && data.length) {
      return data.map((link) => {
        return <SocialLink site={link.site} url={link.url} key={link.site} />;
      });
    }
  };

  return (
    <div className="footer-container">
      <div className="container footer-content">
        <div className="links-container">{renderLinks()}</div>
        <p>&copy;2020 Piotr Ułasiewicz</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.home.social_links,
  };
};

export default connect(mapStateToProps)(Footer);
