import React, { useRef, useMemo } from "react";
import { Github, Window, Phone } from "react-bootstrap-icons";

import "./PortfolioItem.css";
import useWidth from "../../hooks/useWidth";
import useHover from "../../hooks/useHover";
import { WorksItem } from "../../reducers/dataReducer";
interface Props {
  data: WorksItem;
}

const PortfolioItem: React.FC<Props> = ({ data }) => {
  const [smallItem] = useWidth(992);
  const overlayRef = useRef<HTMLInputElement>(null);
  const [hovered] = useHover(overlayRef);

  const portfolioLinks = useMemo(() => {
    const renderPortfolioLinks = () => {
      if (data.links) {
        const keys = Object.keys(data.links);

        const links = keys.map((key) => {
          switch (key) {
            case "github":
              return (
                <a href={data.links[key]} key={key} className="portfolio-link">
                  <Github />
                </a>
              );
            case "own":
              return (
                <a href={data.links[key]} key={key} className="portfolio-link">
                  <Window />
                </a>
              );
            case "expo":
              return (
                <a href={data.links[key]} key={key} className="portfolio-link">
                  <Phone />
                </a>
              );
            default:
              return undefined;
          }
        });
        switch (links.length) {
          case 1:
            return <div className="col-2 offset-5">{links[0]}</div>;
          case 2:
            return (
              <>
                <div className="col-2 offset-3">{links[0]}</div>
                <div className="col-2 offset-2">{links[1]}</div>
              </>
            );
          case 3:
            return (
              <>
                <div className="col-2 offset-1">{links[0]}</div>
                <div className="col-2 offset-2">{links[1]}</div>
                <div className="col-2 offset-2">{links[2]}</div>
              </>
            );
        }
      }
    };

    return (
      <div
        className={`row link-row ${smallItem ? "link-small mt-3" : "mx-3"}`}
      >
        {renderPortfolioLinks()}
      </div>
    );
  }, [data.links, smallItem]);

  const overlay = useMemo(() => {
    return (
      <div className="protfolio-item-container pt-2">
        <div className="row">
          <div className="col-8 offset-2">
            <span
              className={`${
                smallItem ? "portfolio-header-small mt-3" : "portfolio-header"
              }`}
            >
              {data.title}
            </span>
          </div>
        </div>
        {smallItem ? (
          ""
        ) : (
          <div className="row portfolio-description">
            <div className="col-10 offset-1">
              <p>{data.description}</p>
            </div>
          </div>
        )}
        {portfolioLinks}
      </div>
    );
  }, [data, smallItem, portfolioLinks]);


  return (
    <div className="card portfolio-item" ref={overlayRef}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/${data.imageName}`}
        alt={data.imageAlt}
        className="card-img-top"
      />
      <div className={`overlay ${hovered ? "hovered" : ""}`}>
        {overlay}
      </div>
    </div>
  );
};

export default PortfolioItem;
