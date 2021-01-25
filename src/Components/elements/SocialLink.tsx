import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

const stackof = <i className="fab fa-stack-overflow"></i>;

interface Props {
  site: string;
  url: string;
}

const SocialLink: React.FC<Props> = ({ site, url }) => {
  const renderIcon = () => {
    switch (site) {
      case "github":
        return <Github />;
      case "linkedin":
        return <Linkedin />;
      case "stack": {
        return stackof
      }
    }
  };

  return <a href={url}>{renderIcon()}</a>;
};

export default SocialLink