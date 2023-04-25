import React from "react";
import "../styles/cardSlider.css";

export default function CardSlider({ imagenes, data }) {
  return (
    <div className="content-infoSlide">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div>
        <a href={data.url} target="_blank">
          {data.urlname}
        </a>
      </div>
      <div className="content-imgCards">
        {imagenes.map((img, index) => (
          <div
            style={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <img
              className={img.especial}
              src={img.imgRute}
              alt={`Logo ${img.name}`}
            />
          </div>
        ))}
      </div>
      <span>{data.state}</span>
    </div>
  );
}
