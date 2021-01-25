import React from "react";
import { connect } from "react-redux";

import "./Home.css";
import SocialLink from "./elements/SocialLink";
import ScrollButton from "./elements/ScrollButton";
import { State } from "../reducers";
import { Home as HomeType } from "../reducers/dataReducer";

interface HomeProps {
  data: HomeType;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const renderSocialLinks = () => {
    if (data.social_links) {
      return (
        <ul className="social-links">
          {data.social_links.map((link) => {
            return (
              <li>
                <SocialLink site={link.site} url={link.url} />{" "}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="home d-flex text-center" id="home">
      <div className="container home-container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="home-content" id="welcome-text">
              <h1 className="text-white font-weight-bold header-home">
                {data.name}
              </h1>
              <p className="text-light">
                I'm a Night City based <strong>{data.occupation}</strong>.{" "}
                {data.description}
              </p>
              {renderSocialLinks()}
            </div>
          </div>
        </div>
        <ScrollButton direction="bottom" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: state.data.home,
  };
};

export default connect(mapStateToProps)(Home);
