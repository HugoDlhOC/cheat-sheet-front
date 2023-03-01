import { InfinitySpin } from "react-loader-spinner";
import { useState } from "react";
const Card = ({ imgSrc, title, description, url }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <a className="card-container" href={url} target="_blank">
        <img
          className="card-container--img"
          src={imgSrc}
          onLoad={() => setIsLoading(false)}
          alt={"illustration de la technologie " + title}
        />
        {isLoading === true ? <InfinitySpin width="200" color="#00B2A1" /> : ""}
        <div className="card-container--content-card content-card">
          <p className="content-card--title">{title}</p>
          <p className="content-card--description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
