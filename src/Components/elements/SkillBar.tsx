import React, { useRef } from "react";

import "./SkillBar.css";
import useVisibility from "../../hooks/useVisibility";
import { SkillsItem } from "../../reducers/dataReducer";

interface Props {
  data: SkillsItem;
}

const SkillBar: React.FunctionComponent<Props> = ({
  data: { title, subtitle, level },
}) => {
  const bar = useRef<HTMLInputElement>(null);
  const [shown] = useVisibility(bar, true, true);

  return (
    <div className="row skill-bar-container" ref={bar}>
      <div className=" col-3">
        <p className="skill-bar-header">{title}</p>
        {subtitle ? <p className="skill-bar-subtitle">{subtitle}</p> : ""}
      </div>
      <div className="bar-container col-9">
        <div className="bar-border">
          <div
            className="bar-level"
            style={{ width: shown ? `${level}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
