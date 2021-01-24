import React from "react";
import "./ContentListItem.css";

export interface props {
  header: string;
  subheader?: string;
  subtitle?: string;
  dates?: string;
  description?: string;
  subdescription?: string;
  link?: { text: string; href: string };
}

const ContentListItem: React.FC<props> = ({
  header,
  subheader,
  subtitle,
  dates,
  description,
  subdescription,
  link,
}: props) => {
  const renderHeader = () => {
    if (header) return <h3 className="header">{header}</h3>;
  };

  const renderSubheader = () => {
    if (subheader) return <p className="subheader">{subheader}</p>;
  };

  const renderSubtitle = () => {
    if (subtitle && dates) {
      return (
        <p className="subtitle">
          {subtitle} • {dates}
        </p>
      );
    }
    if (subtitle) return <p className="subtitle">{dates}</p>;
  };

  const renderDescription = () => {
    if (description) return <p>{description}</p>;
  };

  const renderSubdescription = () => {
    if (subdescription)
      return <p className="subdescription">{subdescription}</p>;
  };
  const renderLink = () => {
    if (link) {
      return (
        <a href={link.href}>
          <p className="subdescription">{link.text}</p>
        </a>
      );
    }
  };

  return (
    <div className="row content-item-container">
      <div className="col">
        {renderHeader()}
        {renderSubheader()}
        {renderSubtitle()}
        {renderDescription()}
        {renderSubdescription()}
        {renderLink()}
      </div>
    </div>
  );
};

export default ContentListItem;
