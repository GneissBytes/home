import React from "react";

import "./ContentList.css";
import ContentListItem, { props } from "./ContentListItem";

interface listProps {
  data: Array<props>;
}

const ContentList: React.FC<listProps> = ({ data }) => {
  const renderItems = () => {
    return data.map((item) => {
      return <ContentListItem {...item} key={item.header + Math.random()} />;
    });
  };

  return <div className="content-list">{renderItems()}</div>;
};

export default ContentList;
